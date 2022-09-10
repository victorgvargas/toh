import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis$: Observable<Crisis> | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService,
  ) { }

  ngOnInit(): void {
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => 
    //     this.heroService.getHero(Number(params.get('id')!)))
    //   );
    // CODE ABOVE USED WHEN THERE'S COMPONENT RE-USE

    const id = this.route.snapshot.paramMap.get('id')!;

    this.crisis$ = this.crisisService.getCrisis(Number(id));
  }

  gotoCrisis(crisis: Crisis): void {
    const crisisId = crisis ? crisis.id : null;

    this.router.navigate(['/crises', { id: crisisId }, { relativeTo: this.route }]);
  }

}
