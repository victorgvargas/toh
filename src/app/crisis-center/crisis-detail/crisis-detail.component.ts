import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/dialog.service';
import { Crisis } from '../crisis';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit {
  crisis!: Crisis;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const crisis: Crisis = data['crisis'];
      this.crisis = crisis;
    });
  }

  gotoCrisis(crisis?: Crisis): void {
    const crisisId = crisis ? crisis.id : null;

    this.router.navigate([
      '/crises',
      { id: crisisId },
      { relativeTo: this.route },
    ]);
  }

  cancel(): void {
    this.gotoCrisis();
  }

  save(): void {}

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis) return true;

    return this.dialogService.confirm('Discard changes?');
  }
}
