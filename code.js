var link = {            
    setColor: function(color) {
        var alist = document.querySelectorAll('a');
        var i = 0
        while(i<alist.length) {
            alist[i].style.color = color;
            i = i + 1
        }
    }
}
    
var body = {
    setColor: function(color) {
        document.querySelector('body').style.color = color;
    },

    setBackgroundColor: function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

function nightDayHander(self) {
    var target = document.querySelector('body')
    if(self.value=='night') {
        body.setBackgroundColor('black');
        body.setColor('white');
        self.value = 'day';

        link.setColor('powderblue')
    } else {
        body.setBackgroundColor('white');
        body.setColor('black');
        self.value = 'night';   

        link.setColor('blue')
    }
}