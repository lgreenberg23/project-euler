function main(h, m) {
    // var h = parseInt(readLine());
    // var m = parseInt(readLine());
   var text = ''

    switch(m) {
    	case m===0:
    		text =  concat(String(h), " o'clock")
    		break;
    	case (m === 15):
    		text = concat("quarter past ", String(h))
    		break;
    	case (m === 1):
    		text = concat("one minute past " +  String(h))
    		break;
    	case (m===30):
    		text = concat("half past ", String(h))
    		break;
    	case(m=== 45):
    		text = concat("quarter to ", String(h+1))
    		break;
    	case(m === 59):
    		text = concat("one minute to ", String((h+1))
    		break;
    	case (m < 15 || (m >15 && m<30)):
    		text = concat(String(m), " minutes past ", String(h))
    		break;
    	case(m>30 && m<45) || m>45:
			let minTil = String(60 - m)
			text = concat(minTil, "minutes to ", String(h+1))
			break;
    }
    return text


}