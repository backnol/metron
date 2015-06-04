'use strict';

function nl2br($sce){
  return function(msg, isXhtml) { 
    isXhtml = isXhtml || true;
    var breakTag = (isXhtml) ? '<br />' : '<br>';
    msg = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
    return $sce.trustAsHtml(msg);
  };
}

export default nl2br;