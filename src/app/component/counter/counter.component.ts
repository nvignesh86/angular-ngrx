import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset, incrementByInput } from 'src/app/store/actions/counter.actions';
import { getCounter } from 'src/app/store/selectors/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  counter: number = 0;

  constructor(private store: Store){
    store.select(getCounter).subscribe(counter=>{
      console.log("Counter==>",counter);
      this.counter = counter;
    })
  }

  increment(){
    this.store.dispatch(increment());
  }

  incrementByInput(){
    this.store.dispatch(incrementByInput({value: 5}));
  }
  
  decrement(){
    this.store.dispatch(decrement())
  }

  reset(){
    this.store.dispatch(reset())
  }
}
