/**
 * WidgetController
 *
 * @description :: Server-side logic for managing widgets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const uuidv1 = require('uuid/v1');

module.exports = {

    values:function(req,res){
        var requestmethod=req.originalMethod;
        if(requestmethod=='GET'){

            // Sample Request:
            // http://localhost:1337/widget/values?uuid=9a3bdad1-aced-11e7-80ae-89843a10cf82

            var uuid=req.param('uuid');
            if(uuid){
                var obtainedobject=index.widgetObject.db[uuid]
                if(obtainedobject)
                    res.json(obtainedobject);    
                else
                    res.send('This key is not present')
            }
            else{
                res.json(index.widgetObject);
            }
        }
        else if(requestmethod=='POST'){

            // Sample Request:
            // http://localhost:1337/widget/values
            // Specify JSON object in req body

            var inputobject=req.body;
            console.log(inputobject);
            if(inputobject){
                console.log(uuidv1());
                index.widgetObject.put(uuidv1(),inputobject);
                res.send('Value Inserted');
            }
            else{
                res.send('No Input Object is specified');
            }
        
        }
        else if(requestmethod=='PUT'){

            // Sample Request:
            // http://localhost:1337/widget/values?uuid=9a3bdad1-aced-11e7-80ae-89843a10cf82
            // Specify JSON object in req body
            var uuid=req.param('uuid');
            console.log(uuid);
            var inputobject=req.body;
            console.log(index.widgetObject.db);
            var isavailable = index.widgetObject.db[uuid];
            if(isavailable){
                if(inputobject){
                    index.widgetObject.put(uuid,inputobject);
                    res.send('Value updated');
                }
                else{
                    res.send('No Input Object is specified');
                }
            }
            else{
                res.send('Invalid key');
            }
        }
    }
};

