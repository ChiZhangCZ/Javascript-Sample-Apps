var amPm = "";

function hour(hour){

	if(hour >= 12){

		hour-=12;
        amPm = "pm";
	}
	else{

		amPm = "am";
	}

	switch(hour){
	case 00:
	return "It's twelve"
	case 01:
	return "It's one";
	case 02:
	return "It's two";
	case 03:
	return "It's three";
	case 04:
	return "It's four";
	case 05:
	return "It's five";
	case 06:
	return "It's six";
	case 07:
	return "It's seven";
	case 08:
	return "It's eight";
	case 09:
	return "It's nine";
	case 10:
	return "It's ten";
	case 11:
	return "It's eleven";
    }
}

function firstHalfMinute(minute)
{
	switch(minute){
	case 0:
	return "oh";
	case 1:
	return "teen";
	case 2:
	return "twenty";
	case 3:
	return "thirty";
	case 4: 
	return"fourty";
	case 5:
	return "fifty";
    }
}

function secondHalfMinute(minute){
	switch(minute){
	case 0:
	return "";
	case 1:
	return "one";
	case 2:
	return "two";
	case 3:
	return "three";
	case 4: 
	return"four";
	case 5:
	return "five";
	case 6:
	return "six";
	case 7:
	return "seven";
	case 8:
	return "eight";
	case 9: 
	return"nine";
    }
}

function weekDay(day){
	switch(day){
		case 1:
		return "Monday";
		case 2:
		return "Tuesday";
		case 3:
		return "Wednesday";
		case 4:
		return "Thursday";
		case 5:
		return "Friday";
		case 6:
		return "Saturday";
		case 7:
		return "Sunday";
	}
}

function month(month){
	switch(month){
		case 0:
		return "January";
		case 1:
		return "Febuary";
		case 2:
		return "March";
		case 3:
		return "April";
		case 4:
		return "May";
		case 5:
		return "June";
		case 6:
		return "July";
		case 7:
		return "August";
		case 8:
		return "September";
		case 9:
		return "October";
		case 10:
		return "November";
		case 11:
		return "December";
	}
}





function timeTranslate(){

    var date = new Date()
    console.log(date);
	var minList = ""+date.getMinutes();
	var minList=minList.split("");


	var hr = date.getHours();
	var minFirst = minList[0];
	var minSecond= minList[1];
	var dayOfWeek=weekDay(date.getDay());
	var dayOfMonth=date.getDate();
	var currentMonth=month(date.getMonth());
	var currentYear=date.getFullYear();


	var h = hour(parseInt(hr));
	var first = firstHalfMinute(parseInt(minFirst));
	var second = secondHalfMinute(parseInt(minSecond));
	if(first==="teen"){
		if(minSecond == 1){
			var fullTime = h+" "+"eleven"+" "+amPm;
		}
		else if(minSecond == 2){
			var fullTime = h+" "+"twelve"+" "+amPm;
		}
		else if(minSecond==0){
			var fullTime = h+" "+"ten"+" "+amPm;
		}
		else if(minSecond==3){
			var fullTime = h+" "+"thirteen"+" "+amPm;
		}
		else if(minSecond==5){
			var fullTime = h+" "+"fifteen"+" "+amPm;
		}
		else if(minSecond==8){
			var fullTime = h+" "+"eighteen"+" "+amPm; 
		}
		else{
	        var fullTime = h+" "+second+first+" "+amPm;
	    }
	}
	else{
	var fullTime = h+" "+first+" "+second+" "+amPm+"<br />"+dayOfWeek+ ", "+dayOfMonth+" "+currentMonth+ ", "+currentYear;
	}
	document.getElementById("Time").innerHTML=fullTime;

}