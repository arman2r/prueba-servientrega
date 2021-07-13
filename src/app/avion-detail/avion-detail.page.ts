import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-avion-detail',
  templateUrl: './avion-detail.page.html',
  styleUrls: ['./avion-detail.page.scss'],
})
export class AvionDetailPage implements OnInit {

  showProperties = [];
  offsetTopBtn = 0;
  @ViewChild('imageTop', { static: false }) imageTop: ElementRef

  createAvionForm: FormGroup
  avionFile: File;
  enableEdit = false;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {

    this.createAvionForm = this.fb.group({
      referencia: [{ value: '', disabled: true }, [Validators.required]],
      imageAvion: [{ value: '', disabled: true }, [Validators.required]],
      origen: [{ value: '', disabled: true }, [Validators.required]],
      destino: [{ value: '', disabled: true }, [Validators.required]],
      cantidadContenedores: [{ value: '', disabled: true }, [Validators.required]],
      totalCarga: [{ value: '', disabled: true }, [Validators.required]],
      UMedidaCarga: [{ value: '', disabled: true }, [Validators.required]],
      descripcion: [{ value: '', disabled: true }, [Validators.required]]
    });

    let getAllStorage = JSON.parse(localStorage.getItem('avionProperties'))
    this.route.paramMap
      .subscribe((queryParams: ParamMap) => {
        let idAvion = queryParams.get('avionId');
        console.log(idAvion)
        this.showProperties = getAllStorage.filter(x => x.id == idAvion);
        console.log(this.showProperties)
        this.createAvionForm.get('referencia').setValue(this.showProperties[0].referencia);
        this.createAvionForm.get('origen').setValue(this.showProperties[0].origen)
        this.createAvionForm.get('destino').setValue(this.showProperties[0].destino)
        this.createAvionForm.get('cantidadContenedores').setValue(this.showProperties[0].cantidadContenedores)
        this.createAvionForm.get('totalCarga').setValue(this.showProperties[0].totalCarga)
        this.createAvionForm.get('UMedidaCarga').setValue(this.showProperties[0].UMedidaCarga)
        this.createAvionForm.get('descripcion').setValue(this.showProperties[0].descripcion)
      });


  }

  editForm() {
    this.enableEdit = !this.enableEdit
    if (this.enableEdit) {
      this.createAvionForm.get('origen').enable()
      this.createAvionForm.get('destino').enable()
      this.createAvionForm.get('cantidadContenedores').enable()
      this.createAvionForm.get('totalCarga').enable()
      this.createAvionForm.get('UMedidaCarga').enable()
      this.createAvionForm.get('descripcion').enable()
    } else {
      this.createAvionForm.get('origen').disable()
      this.createAvionForm.get('destino').disable()
      this.createAvionForm.get('cantidadContenedores').disable()
      this.createAvionForm.get('totalCarga').disable()
      this.createAvionForm.get('UMedidaCarga').disable()
      this.createAvionForm.get('descripcion').disable()
    }

  }

  ngAfterViewInit() {
    setTimeout(() => {
      let imagen = this.imageTop.nativeElement;

      console.log(imagen.clientHeight, imagen.offsetHeight)
      this.offsetTopBtn = imagen.offsetHeight;
    }, 500);


  }

}
