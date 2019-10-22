

function checkButton(ident, value)
{	
  	if (value == 0)
   	{
   		document.getElementById(ident).style.backgroundColor = '#33B5E5';
        document.getElementById(ident).style.color = 'white';
        document.getElementById(ident).value = 1;
        if (ident != 'b1')
        {
        for(j=1; j<=7; j++)
        {
        	document.getElementById(ident+j).checked = 1;
        }  
        }  
        
    }
    else 
    {
       	document.getElementById(ident).style.backgroundColor = '#fafafa';
       	document.getElementById(ident).style.color = '#33B5E5';
       	document.getElementById(ident).value = 0;
       	if (ident != 'b1')
        {
       	for(j=1; j<=7; j++)
        {
        	document.getElementById(ident+j).checked = 0;
        }
    }
       	

    }
}

function checkAll()
{	if (document.getElementById('b1').value == 0)
	{
	for(i=1;i<=7;i++) 
		{
	document.getElementById('b'+i).value = 0;
	checkButton('b'+i, document.getElementById('b'+i).value);
		}
	}
	else {
		for(i=1;i<=7;i++) 
			{
	document.getElementById('b'+i).value = 1;
	checkButton('b'+i, document.getElementById('b'+i).value);
			}
		}
}

          
          