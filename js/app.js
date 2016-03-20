$(function(){
	var qiu = function(){
		move('#motion-2-1').x(50).y(-500).delay('0s').end()
		move('#motion-2-2').x(-10).y(280).delay('0s').end()
	}
	var qiu1 = function(){
		move('#motion-2-1').x(0).y(0).delay('1s').end()
		move('#motion-2-2').x(0).y(0).delay('1s').end()
	}


	var qiqiu = function(){
		move('.fate-in-up').x(0).y(-570).delay('0s').end()
	}
	var qiqiu1 = function(){
		move('.fate-in-up').x(0).y(0).delay('1s').end()
	}


	var apple = function(){
		move('.apple').x(0).y(370).delay('0s').end()
		move('.shou').x(0).y(-400).delay('0s').end()
	}
	var apple1 = function(){
		move('.apple').x(0).y(0).delay('1s').end()
		move('.shou').x(0).y(0).delay('1s').end()
	}


	var jinru2 = function(index){
	    move('#motion-3-1').scale(1,1).delay('0s').end();  
	    move('#motion-3-2').scale(1,1).delay('0s').end(); 
	}
	var likai2 = function(index){
        move('#motion-3-1').scale(1.4).delay('1s').end();  
        move('#motion-3-2').scale(1.4).delay('1s').end();
    }
	

	var jinru3 = function(index){
        move('#motion-4-1').x(20).y(70).delay('0s').end();  

        move('#motion-4-2-1').x(-4).y(0).delay('0s').end(); 
        move('#motion-4-2-2').y(0).delay('0s').end();

        move('#motion-4-3').x(0).delay('0s').end();

        move('#motion-4-4').x(0).delay('0s').end();

        move('#motion-4-5').scale(1).delay('0s').end();     
    }
     var likai3 = function(index){
        move('#motion-4-1').x(20).y(700).delay('1s').end();  

        move('#motion-4-2-1').y(-350).delay('1s').end(); 
        move('#motion-4-2-2').y(450).delay('1s').end(); 

        move('#motion-4-3').x(0).delay('1s').end();

        move('#motion-4-4').x(400).delay('1s').end();
         
        move('#motion-4-5').scale(1.4).delay('1s').end();
    }


    var jinru4 = function(index){
        move('#motion-5-1').x(-30).y(200).delay('0s').end(); 

        move('#motion-5-2').x(400).y(-150).delay('0s').end(); 

        move('#motion-5-3').x(1230).y(-50).delay('0s').end(); 
    }
    var likai4 = function(index){
         move('#motion-5-1').x(-30).y(-300).delay('1s').end(); 

        move('#motion-5-2').x(400).y(-550).delay('1s').end(); 

        move('#motion-5-3').x(1230).y(-450).delay('1s').end(); 
    }



	$('#fullpage').fullpage({
		controlArrows:true,
		scrollingSpeed:1300,

		anchors:['page-1','page-2','page-3','page-4','page-5'],
		
		afterLoad:function(link,index){
			switch(link){
				case 'page-2':qiu();break;
				case 'page-3':jinru2();break;
				case 'page-4':jinru3();break;
				case 'page-5':jinru4();break;
			}
		},
		onLeave:function(index,nextIndex,direction){
			switch(index){
				case 2:qiu1();break;
				case 3:likai2();break;
				case 4:likai3();break;
				case 5:likai4();break;
			}
		}
	})

	var $xuanxian=$(".section-7-nav li");
	$xuanxian.hover(
	    function(){
	        $(this).addClass('active');
	    },
	    function(){
	        $(this).removeClass('active');
	    }
	)
	
})