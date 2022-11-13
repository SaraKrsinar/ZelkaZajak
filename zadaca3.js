
			var i1;
            var i2;
            var rabbit;
            var turtle;
            var krajna_poz;
            var count;
            var setting;

            function init()
            {
                i1 = document.getElementById('zajak1');
                i2 = document.getElementById('zelka1');
                i1.style.position= 'absolute'; 
                i1.style.left = '0px'; 
                i2.style.position= 'absolute'; 
                i2.style.left = '0px'; 
                rabbit = 0;
                turtle = 0;
                krajna_poz = 70;
                count = 0;
            }
			 function start1()
             {
                setTimeout(function(){document.getElementById('p1').innerHTML="BANG";},500);
                setTimeout(function(){document.getElementById('p1').innerHTML="BANG"+"<br>"+" POCNA TRKATA ";},1000);
                pocni();
            }

			function pocni()
            {
                setting = setInterval(function(){ position();}, 1000);
            }

		function position()
        {   
            if ( turtle != krajna_poz && rabbit != krajna_poz )
            {
                dvizizajak();
                dvizizelka();
                print();
        	}
            count += 1;
            if ( turtle >= krajna_poz ||  rabbit >= krajna_poz )
            {
                if ( turtle >= rabbit )
                {
                    window.alert("ZELKATA POBEDI!!!" + " ( TRKATA TRAESE " + count + " SEKUNDI ) ");
                }
                else
                {
                    window.alert("ZAJAKOT POBEDI!!!" + " ( TRKATA TRAESE " + count + " SEKUNDI ) ");
                }
                if( turtle == rabbit && rabbit!=0 && turtle!=0 )
                {
                    window.alert("OUCH");
                }
                clearInterval(setting);
            }
    	} 

		 function print()
         {
            for ( var i = 1; i <= krajna_poz; i++ )
            {	
                if ( i == turtle && i == rabbit )
                {
                    i1.style.left = 10*i + 'px';
                    i2.style.left = 10*i + 'px';
                }
                else if ( i == rabbit )
                    {
                        i1.style.left = 10*i + 'px';
                    }
                else if ( i == turtle )
                    {
                        i2.style.left = 10*i + 'px';
                    }
                else {}
             } 
		 }
		 function dvizizajak()
		 {
            var a;
			a = Math.floor(( Math.random()*10 ) + 1 );
			if ( a == 1 || a == 2 )
				{
                    rabbit=rabbit;
                }//nema dvizenje -sleep
			else if ( a == 3 || a == 4 )
				{
                    rabbit = rabbit + 9;
                }//big hop
			else if (a == 5)
				{
                    rabbit = rabbit - 12;
                }//big slip
			else if ( a >= 6 && a <= 8 )
				{
                    rabbit = rabbit + 1;
                }//small hop
			else
				{
                    rabbit = rabbit - 2;
                }//small slip
			if ( rabbit < 1 )
                {
                    rabbit = 1;
                }//da ne moze da odi pred prvata poz
			else if ( rabbit > krajna_poz )
			    {
                    rabbit = krajna_poz;
                }//da zastane na krajna poz
		}
		function dvizizelka()
		 {
			var b;
			b = Math.floor((Math.random()*10)+1);
			if ( b >=1 && b <= 5 )
				{
                    turtle = turtle + 3;
                }//fast plod
			else if ( b == 6 || b == 7 )
				{
                    turtle = turtle - 6;
                }//slip
			else
				{
                    turtle = turtle + 1;
                }//slow plod
			if ( turtle < 1 )
			    {
                    turtle = 1;
                }//da ne moze da odi pred prvata poz
			else if ( turtle > krajna_poz )
			    {
                    turtle = krajna_poz;
                }//da zastane na krajna poz

         } 
            window.addEventListener("load",init,false);