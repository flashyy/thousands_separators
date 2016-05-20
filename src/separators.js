'use strict';

function thousands_separators(num) {
        var sign = "";
        if (num<0)
        {
            sign += '-';
            num *= -1;
        }
        var intpart=Math.trunc(num);
        var sIntpart=''+intpart;
        var decpart= num-intpart;
        var sDecPart = '';
        if(decpart>0)
        {
                  var sValue =''+num;
                  var iPos=sValue.indexOf('.');
                  sDecPart = sValue.substr(iPos, sValue.length-iPos);
           
        }

        var sInvValue="";
        var ncyc= 3;
        
        for (var i = sIntpart.length - 1,j=0; i>= 0; i--,j++) {
                if(j>0 && j%ncyc === 0)
                         sInvValue += ",";
                 sInvValue += sIntpart[i];
        };
        var svalue = '';
        for(var i=sInvValue.length-1,j=0;i>=0; i--,j++){
                svalue +=sInvValue[i];
        };

        svalue = sign+svalue+sDecPart;
        return svalue;
  
}

module.exports = thousands_separators;
