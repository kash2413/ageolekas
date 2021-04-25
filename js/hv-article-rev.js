/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*<button onclick="sendRev(url,answ)">Start</button>*/

   
        function sendRev(url,answ) {
            jQuery.ajax( {
                url: 'https://paulwolfdesign.com/hv-art-rev.php',
                type: 'post',
                crossDomain: true,
                data: { url: url, answ: answ },
                dataType: 'json',
                success: function( response ) {
                  //  alert('Köszönjük, hogy segíted a munkánkat!');
                    //console.log(response);
                }, 
                error : function(error) {
                    // alert('Köszönjük, hogy segíted a munkánkat!');
                    //console.log(error);
                },  
            });
        }
      
