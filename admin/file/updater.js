
async function update(){
    if (confirm("Are you Sure!")) {
        console.log( "You pressed OK!");
    } else {
        console.log("You pressed Cancel!");return;
    }



    if(document.getElementById("HouseFeatureCB").checked==true){
        var HouseFeature={}
        inputs = document.getElementsByName( 'feat' );
        key = [].map.call(inputs, function( input ) {
                return input.value;
            });
        inputs = document.getElementsByName( 'val' );   
        value = [].map.call(inputs, function( input ) {
                return parseInt(input.value);
            });
        for(i=0;i<key.length;i++){
            HouseFeature[key[i]] = value[i]}
        console.log(HouseFeature)
        await firebase.firestore().collection('properties').doc(ID).update({
            HouseFeature
        })       
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("nearLocationCB").checked){
        var NearPlaces={}
        inputs = document.getElementsByName( 'nearPlaces' );
        key = [].map.call(inputs, function( input ) {
                    return input.value;
                });
        inputs = document.getElementsByName( 'distance' );   
        value = [].map.call(inputs, function( input ) {
                    return input.value;
                });
        for(i=0;i<key.length;i++){
            NearPlaces[key[i]] = value[i]}
        
        console.log(NearPlaces)   
        await firebase.firestore().collection('properties').doc(ID).update({
          NearPlaces
        })   
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("nearByCB").checked){
        var Nearby={}
        inputs = document.getElementsByName( 'nearby' );
        key = [].map.call(inputs, function( input ) {
                    return input.value;
                });
        inputs = document.getElementsByName( 'number' );   
        value = [].map.call(inputs, function( input ) {
                    return input.value;
                });
        for(i=0;i<key.length;i++){
            Nearby[key[i]] = value[i]}
        
        console.log(Nearby)  
        await firebase.firestore().collection('properties').doc(ID).update({
            Nearby
        })    
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("otherChargesCB").checked){
        var OtherCharges={}
        inputs = document.getElementsByName( 'otherchargename' );
    key = [].map.call(inputs, function( input ) {
                return input.value;
            });
    inputs = document.getElementsByName( 'amount' );   
    amount = [].map.call(inputs, function( input ) {
                return input.value;
            });
    inputs = document.getElementsByName( 'additionalNote' );   
    note = [].map.call(inputs, function( input ) {
                return input.value;
            });

    arr= new Array()
    for( i=0;i<key.length;i++)
      arr[i] = new Array(2);
    for(i=0;i<key.length;i++){
        arr[i][0] = amount[i];
        arr[i][1] = note[i];
    }

    for(i=0;i<key.length;i++){
        OtherCharges[key[i]] = arr[i]}
    
    console.log(OtherCharges)  
    await firebase.firestore().collection('properties').doc(ID).update({
        OtherCharges
    })    
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("amenitiesCB").checked){
        
        inputs = document.getElementsByName( 'Amenity' );
    amenities = [].map.call(inputs, function( input ) {
                return input.value;
            });
            await firebase.firestore().collection('properties').doc(ID).update({
            amenities
        })   
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("shortDescriptionCB").checked){
        inputs = document.getElementsByName( 'shortDescription' )[0].value;
        shortDescription = inputs
        console.log(shortDescription)
        await firebase.firestore().collection('properties').doc(ID).update({
        shortDescription
        })    
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("descriptionCB").checked){
        
        inputs = document.getElementsByName( 'description' )[0].value;
        description = inputs
        await firebase.firestore().collection('properties').doc(ID).update({
            description
            })     
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("forWhomCB").checked){
        inputs = document.getElementsByName( 'forWhom' )[0].value;
        forWhom = inputs
        console.log(forWhom)
        await firebase.firestore().collection('properties').doc(ID).update({
            forWhom
            }) 
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("roomTypeCB").checked){
        inputs = document.getElementsByName( 'roomType' )[0].value;
        type = inputs
        firebase.firestore().collection('properties').doc(ID).update({
            type
            }) 
    }
    
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("locationCB").checked){
        inputs = document.getElementsByName( 'location' )[0].value;
        var location = inputs
        console.log(location);
        await firebase.firestore().collection('properties').doc(ID).update({
          location
            }) 
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("minimumSecurityDepositCB").checked){
        inputs = document.getElementsByName( 'minSecurityDeposit' )[0].value;
        minSecurityDeposit = inputs
        await firebase.firestore().collection('properties').doc(ID).update({
           minSecurityDeposit
            }) 
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("securityDepositCB").checked){
        inputs = document.getElementsByName( 'SecurityDeposit' )[0].value;
        securityDeposit = inputs
        await firebase.firestore().collection('properties').doc(ID).update({
            securityDeposit
            }) 
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("nameCB").checked){
        inputs = document.getElementsByName( 'name' )[0].value;
        name = inputs
        console.log(name)
        await firebase.firestore().collection('properties').doc(ID).update({
            name
        })
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("landmarkCB").checked){
        inputs = document.getElementsByName( 'landmark' );
        nearby = [].map.call(inputs, function( input ) {
                    return input.value;
                });
        
        console.log(nearby)  
        await  firebase.firestore().collection('properties').doc(ID).update({
            nearby
            }) 
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("photoURLCB").checked){
        inputs = document.getElementsByName( 'photosURL' );
        photos = [].map.call(inputs, function( input ) {
                return input.value;
            });
            console.log(photos)
            await  firebase.firestore().collection('properties').doc(ID).update({
               photos
                })          
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("priceArrayCB").checked){
        inputs = document.getElementsByName( 'PriceArray' );
    priceArray = [].map.call(inputs, function( input ) {
                return parseInt(input.value);
            });
    
    console.log(priceArray)      
    await firebase.firestore().collection('properties').doc(ID).update({
      priceArray
        }) 
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("rentDetailCB").checked){
        rentDetails={}
        inputs = document.getElementsByName( 'type' );
        key = [].map.call(inputs, function( input ) {
                    return input.value;
                });
        inputs = document.getElementsByName( 'monthlyRent' );   
        rent = [].map.call(inputs, function( input ) {
                    return input.value;
                });
        inputs = document.getElementsByName( 'RentSecurityDeposit' );   
        SD = [].map.call(inputs, function( input ) {
                    return input.value;
                });
    
        arr= new Array()
        for( i=0;i<key.length;i++)
          arr[i] = new Array(2);
        for(i=0;i<key.length;i++){
            arr[i][0] = rent[i];
            arr[i][1] = SD[i];
        }
    
        for(i=0;i<key.length;i++){
            rentDetails[key[i]] = arr[i]}
        
        console.log(rentDetails)  
        await  firebase.firestore().collection('properties').doc(ID).update({
            rentDetails
            })    
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("propertyResponsibilityCB").checked){
        inputs = document.getElementsByName( 'responsibility' );
    responsibility = [].map.call(inputs, function( input ) {
                return input.value;
            });
      console.log(responsibility)       
      firebase.firestore().collection('properties').doc(ID).update({
        responsibility
        })    
    }
    ///////////////////////////////////////////////////////////////////
    if(document.getElementById("propertyRulesCB").checked){
        inputs = document.getElementsByName( 'rules' );
        rules = [].map.call(inputs, function( input ) {
                    return input.value;
                });
      
        console.log(rules) 
        await  firebase.firestore().collection('properties').doc(ID).update({
            rules
            })         
    }
     ///////////////////////////////////////////////////////////////////
     if(document.getElementById("PMnameCB").checked){
        inputs = document.getElementsByName( 'PMname' )[0].value;
        manager = inputs
        // console.log(name)
        await firebase.firestore().collection('properties').doc(ID).update({
            manager
        })
    }
     ///////////////////////////////////////////////////////////////////
     if(document.getElementById("ownerNameCB").checked){
        inputs = document.getElementsByName( 'ownerName' )[0].value;
        ownerName = inputs
        // console.log(name)
        await  firebase.firestore().collection('properties').doc(ID).update({
            ownerName
        })
    }
     ///////////////////////////////////////////////////////////////////
     if(document.getElementById("PMphonenumberCB").checked){
        inputs = document.getElementsByName( 'PMPhonenumber' )[0].value;
        PMPhonenumber = inputs
        // console.log(name)
        await firebase.firestore().collection('properties').doc(ID).update({
            PMPhonenumber
        })
    }
     ///////////////////////////////////////////////////////////////////
     if(document.getElementById("PMnumberCB").checked){
        inputs = document.getElementsByName( 'numberOfProperty' )[0].value;
        numberOfProperty = inputs
        // console.log(name)
        await firebase.firestore().collection('properties').doc(ID).update({
            numberOfProperty
        })
    }
     ///////////////////////////////////////////////////////////////////
     if(document.getElementById("ownerNumberCB").checked){
        inputs = document.getElementsByName( 'ownerNumber' )[0].value;
        ownerNumber = inputs
        // console.log(name)
        await firebase.firestore().collection('properties').doc(ID).update({
            ownerNumber
        })
    }
     ///////////////////////////////////////////////////////////////////
     if(document.getElementById("companyChargeCB").checked){
        inputs = document.getElementsByName( 'companyCharge' )[0].value;
        companyCharge = inputs
        // console.log(name)
        await firebase.firestore().collection('properties').doc(ID).update({
            companyCharge
        })
    }
     ///////////////////////////////////////////////////////////////////
     if(document.getElementById("ownerSecurityDepositCB").checked){
        inputs = document.getElementsByName( 'ownerSecurityDeposit' )[0].value;
        ownerSecurityDeposit = inputs
        // console.log(name)
        await firebase.firestore().collection('properties').doc(ID).update({
            ownerSecurityDeposit
        })
    }
     ///////////////////////////////////////////////////////////////////
     if(document.getElementById("bookedRoomsCB").checked){
        inputs = document.getElementsByName( 'bookedRooms' )[0].value;
        bookedRooms = parseInt(inputs)
        // console.log(name)
        await firebase.firestore().collection('properties').doc(ID).update({
            bookedRooms
        })
    }
     ///////////////////////////////////////////////////////////////////
     if(document.getElementById("propertyTypeInputCB").checked){
        e = document.getElementById('propertyTypeInput')
        propertyType = e.options[e.selectedIndex].value;
        // console.log(name)
        await firebase.firestore().collection('properties').doc(ID).update({
            propertyTypeInput
        })
    }
     ///////////////////////////////////////////////////////////////////
     if(document.getElementById("agreementCB").checked){
        await firebase.storage().ref("agreement/"+ID).put(agreementPic);
       

    }
     ///////////////////////////////////////////////////////////////////
     if(document.getElementById("checklistCB").checked){
        await  firebase.storage().ref("checklist/"+ID).put(checklistPic);
    }
    /////////////////////////////////////////////////////////////
    window.location.reload();

}
var docID=[]
var ID 
function verify(){
    ID = document.getElementsByName( 'getID' )[0].value;
    //  var ID = inputs;
     console.log(ID)
     var  exist;
firebase.firestore().collection('properties').doc(ID).get().then((doc)=>{
    if(doc.exists==false)
    alert("Dont exist")
    else{
        alert("It is the id of property name " + doc.data().name + " in "+ doc.data().location)
    }

})

}