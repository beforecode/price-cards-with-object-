const planTitle = document.querySelectorAll(".plan .plan_title")
const planDesc = document.querySelectorAll(".plan .plan_desc")
const planPrice = document.querySelectorAll(".plan .weight_price")

const plans = [
	{title:"STARTUP",desc:"perfect for small buisness",price:"4.99",
	details:""},
	{title:"ENTERPRISE",desc:"Perfect for medium business",price:"9.99",
	details:""},
	{title:"DEVELOPER",desc:"Perfect for larg business",price:"19.99",
	details:""}
];

for(i=0; i<planTitle.length;i++) {
	const plnttl = plans.map(ttl => ttl.title);
	const plndsc = plans.map(dsc => dsc.desc);
	const plnprx = plans.map(prx => prx.price);
		// rendering js
	planTitle[i].innerHTML = plnttl[i];
	planDesc[i].innerHTML = plndsc[i];
	planPrice[i].innerHTML = plnprx[i];
}
