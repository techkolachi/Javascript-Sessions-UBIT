var d = new Date();
document.write( d + "<br>")
// d.setFullYear(2030)
// d.setMonth(7)
// d.setDate(24)
// d.setHours(22)
// d.setMinutes(59)
// d.setSeconds(9)
// d.setMilliseconds(900)
// document.write( d + "<br>")
document.write(d.getMilliseconds() + "<br>")
d.setMilliseconds(900)
document.write( "document write"+d + "<br>")