import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-avion',
  templateUrl: './create-avion.page.html',
  styleUrls: ['./create-avion.page.scss'],
})
export class CreateAvionPage implements OnInit {

  createAvionForm: FormGroup
  avionFile: File;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) { }

  ngOnInit() {

    this.createAvionForm = this.fb.group({
      referencia: ['', Validators.required],
      imageAvion: ['', Validators.required],
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      cantidadContenedores: ['', Validators.required],
      totalCarga: ['', Validators.required],
      UMedidaCarga: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

  }
  public imagePath;
  imgURL: any;
  setImageAvion($event) {
    this.avionFile = $event.target.files[0];
    console.log(this.avionFile);
    var reader = new FileReader();
    this.imagePath = this.avionFile;
    reader.readAsDataURL(this.avionFile);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  imagen: any;
  storage = []
  idAvion = 0;

  setAvion() {


    return new Promise((resolve, reject) => {
      let newAvion = [];
      const reader = new FileReader();
      reader.readAsDataURL(this.avionFile);
      reader.onload = () => {
        resolve(reader.result);
        this.idAvion += 1;
        console.log(this.idAvion)
        this.createAvionForm.get('imageAvion').setValue(reader.result);
        newAvion.push(this.createAvionForm.value);
        this.imagen = newAvion[0].imageAvion;
        console.log(this.storage)
        let storageLcal = localStorage.getItem('avionProperties')
        if (storageLcal !== (undefined || null)) {
          let getAllDatos = JSON.parse(storageLcal)
          let position = getAllDatos.length - 1;
          let getIdElement = getAllDatos[position].id
          console.log(getIdElement + 1)
          localStorage.removeItem('avionProperties')
          let objAvion = Object.assign({
            'id': getIdElement + 1,
            'UMedidaCarga': newAvion[0].UMedidaCarga,
            'cantidadContenedores': newAvion[0].cantidadContenedores,
            'descripcion': newAvion[0].descripcion,
            'origen': newAvion[0].origen,
            'destino': newAvion[0].destino,
            'imageAvion': newAvion[0].imageAvion,
            'referencia': newAvion[0].referencia,
            'totalCarga': newAvion[0].totalCarga,
          })
          getAllDatos.push(objAvion)
          console.log(getAllDatos)
          // // this.storage.concat(objAvion)
          localStorage.setItem('avionProperties', JSON.stringify(getAllDatos))
        }
        else {
          let objAvion = Object.assign({
            'id': this.idAvion,
            'UMedidaCarga': newAvion[0].UMedidaCarga,
            'cantidadContenedores': newAvion[0].cantidadContenedores,
            'descripcion': newAvion[0].descripcion,
            'origen': newAvion[0].origen,
            'destino': newAvion[0].destino,
            'imageAvion': newAvion[0].imageAvion,
            'referencia': newAvion[0].referencia,
            'totalCarga': newAvion[0].totalCarga,
          })
          this.storage.push(objAvion)
          localStorage.setItem('avionProperties', JSON.stringify(this.storage))
        }

        // console.log(this.createAvionForm.value)
        this.closeModal()
      };
      reader.onerror = error => { reject(error) };
    });


  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
