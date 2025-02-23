//your JS code here. If required.
function daysOfAYear(n){
	if(n%400===0)return 366
	if(n%100===0)return 365
	if(n%4)return 366
	return 365
}
year=prompt()
console.log(daysOfAYear(year))