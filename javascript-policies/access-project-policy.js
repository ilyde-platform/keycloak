var context = $evaluation.getContext();
var identity = context.getIdentity();
var attributes = identity.getAttributes();
var uid = identity.getId();
var permission = $evaluation.getPermission();
var resource = permission.getResource();
    
var visibility = resource.getAttribute("visibility")[0];
if (visibility == "public"){
    $evaluation.grant();
}

else {
    var members = resource.getAttribute("members");
    for (var i = 0; i < members.length; i++) {
        if (uid == members[i]){
            $evaluation.grant();
        }            
    }
}
