import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HorseService } from '@app/horse.service';
import { AlertService } from '@app/_services';

@Component({
  selector: 'app-add-horse',
  templateUrl: './add-horse.component.html',
  styleUrls: ['./add-horse.component.css']
})
export class AddHorseComponent implements OnInit {
  form: FormGroup;
  id: string;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private horseService: HorseService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.form = this.formBuilder.group({
        name: ['', Validators.required],
        race: ['', Validators.required],
        age: ['', Validators.required]
    });
    this.horseService.getById(this.id)
            .pipe(first())
            .subscribe(x => this.form.patchValue(x));
    }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      this.createAccount();
  }

  private createAccount() {
      this.horseService.create(this.form.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  this.alertService.success('Account created successfully', { keepAfterRouteChange: true });
                  this.router.navigate(['../'], { relativeTo: this.route });
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }
}
