import { Component, OnInit, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogClose } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Animations } from 'src/app/_shared/animations';

@Component({
  selector: 'app-send-claims',
  templateUrl: './send-claims.component.html',
  styleUrls: ['./send-claims.component.scss'],
  animations: [Animations.kendraAnimations]
})
export class SendClaimsComponent implements OnInit {
  nextStep = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly router: Router,
  ) { }

  ngOnInit() {
  }


  nextClaimStep(){
    console.log(this.data);
    this.nextStep = true;
  }

  nextClaimStep3(section: string) {

    localStorage.setItem(section, JSON.stringify(this.data.data));

      this.router.navigate(['/claims']);
    // sidenav.open();
 


  }

  removeClaim(i){
    this.data.splice(i, 1);
  }


}
