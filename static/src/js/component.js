


odoo.define('test-js.component', function (require) {
"use strict";
const { useState } = owl.hooks;
const { Component } = owl;
const { xml }  = owl.tags;


class MyComponent extends Component
{
    
 constructor() {

super(...arguments);


this.state = useState({ currentIndex: 0, data:[] });

getCity();
// Step 2: Get city name
 function getCity() {
 var x,y;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 

 async function showPosition(position) {
  x = position.coords.latitude ;
  y = position.coords.longitude;

    let respon = await fetch("https://us1.locationiq.com/v1/reverse?key=pk.7f7d17bed72412e649765adbc48069ea&lat=" +
    x + "&lon=" + y + "&format=json")
    let city = await respon.json();
  
    let res_wether = await fetch('http://api.weatherapi.com/v1/current.json?key=6a1540a7266d49b18cc64331222406&q='+city.address.city)
    let wether = res_wether.json();

    this.state.data = wether;
    
}

  }

}
onNext(ev) {
this.state.currentIndex++;
if(this.state.currentIndex==4)
{
    this.state.currentIndex =1;
}
}
onPrevious(ev) {
this.state.currentIndex--;
if(this.state.currentIndex==0)
{
    this.state.currentIndex =3;
}
}
onRemove(ev)
{
    this.destroy()
}
    static template = xml`
                    <div class="bg-info text-center p-2">
                         <i class="fa fa-arrow-left p-1" style="cursor: pointer;" t-on-click="onPrevious"> </i>
                         <b t-esc="state.data[state.currentIndex]"/>
                         <i class="fa fa-arrow-right p-1" style="cursor: pointer;" t-on-click="onNext"> </i>
                         <i class="fa fa-close p-1 float-right" style="cursor: pointer;" t-on-click="onRemove"> </i>
                        </div>
                `;
               

}

owl.utils.whenReady().then(() => {
const app = new MyComponent();
app.mount(document.body);
});

});
