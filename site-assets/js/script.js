d = new Date()
age = d.getFullYear() - 1991
if ((d.getMonth() < 10) || (d.getMonth() == 10 && d.getDate() <= 28)) {
	age -= 1
}

$("#age").text(age)