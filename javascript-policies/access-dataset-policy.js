var context = $evaluation.getContext();
var identity = context.getIdentity();
var attributes = identity.getAttributes();
var uid = identity.getId();
var permission = $evaluation.getPermission();
var resource = permission.getResource();
var resourceServer = permission.getResourceServer();
    
var scope = resource.getAttribute("scope")[0];
if (scope == "global"){
    $evaluation.grant();
}

else {
    // retrieve project and check if user is a member
    var project = resource.getAttribute("project")[0];
    var authProvider = $evaluation.getAuthorizationProvider();
    var resourceStore =  authProvider.getLocalStoreFactory().getResourceStore();
    var name = "urn:ilyde:resources:projects:" + project;
    var projectResource = resourceStore.findByName(name, resourceServer.getId());
    var members = projectResource.getAttribute("members");
    for (var i = 0; i < members.length; i++) {
        if (uid == members[i]){
            $evaluation.grant();
        }            
    }
    var visibility = projectResource.getAttribute("visibility")[0];
    if (visibility == "public"){
        $evaluation.grant();
    }
}
