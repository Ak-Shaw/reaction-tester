            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }


            var start=new Date().getTime();
            
            var bestTime=start;
            
            function makeShapeAppear(){
                
               
               var top=Math.random()*250;
                var left = Math.random()*400;
                var borderRadius=Math.random()*50;
                var height=Math.random()*150+100;
                var width=height;
               
                var shapeStyler=document.getElementById("shape").style;
                shapeStyler.top=top+"px";
                
               shapeStyler.left=left+"px";
                
                shapeStyler.borderRadius=borderRadius+"%";
                
                shapeStyler.height=height+"px";
                
                shapeStyler.width=width+"px";
                
                shapeStyler.border="3px solid black";
                
                shapeStyler.backgroundColor=getRandomColor();
                
                shapeStyler.display="block";
                
                start=new Date().getTime();
            }
            
            function appearAfterDelay(){
                setTimeout(makeShapeAppear,Math.random()*2000);
            }
            
            appearAfterDelay();
            
            
            function makeShapeDissappear(){
                document.getElementById("shape").style.display="none";
                
                var end=new Date().getTime();
                
                var timeTaken=(end-start)/1000;
                
                
                
                document.getElementById("timeTaken").innerHTML="Your time : "+timeTaken+" s";
                
                if(timeTaken<bestTime)
                    bestTime=timeTaken;
                
                document.getElementById("bestTime").innerHTML="Best time : "+bestTime+" s";
                
                appearAfterDelay();
            }
            