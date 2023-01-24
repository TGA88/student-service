import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
// import { customerModel } from "@student-service/crud-core"
import { PrismaClient } from "@prisma/client";
// import  multer  from '../../util';
import * as fs from 'fs';
import path = require("path");

const client = new PrismaClient()



interface ICustomerParams {
    id: string 
  }

interface ICustomerModel {
    firstname: string;
    fullname: string;
  }
  interface ITestModel {
    img: string;
  }
  
  interface IHeaders {  
    'h-Custom': string;
  }

export async function getCustmoer(req:FastifyRequest,reply:FastifyReply) {
    try {
       const customer = await client.customer.findMany({})
       reply.status(200).send(customer)
       console.log(customer)
    }
    catch (e) {
        console.log(e)
        reply.status(400).send({
        error:"not found"
        })

    }
}

export async function getOneCustmoer(req:FastifyRequest<{Params:ICustomerParams ,Headers: IHeaders}>,reply:FastifyReply) {
    console.log(req.params)
    try {
        const id = req.params.id
       const customer = await client.customer.findFirst({  
        where:{id:parseInt(id)}
    })
       reply.status(200).send(customer)
    }
    catch (e) {
        console.log(e)
        reply.status(400).send({
        error:"not found"
        })
    }
}

export async function postCustmoer(req:FastifyRequest<{Body: ICustomerModel,Headers: IHeaders}>,reply:FastifyReply) {
    console.log(req.body)
    try {
        const customer  =  await client.customer.create({
            data: {
                firstname:req.body.firstname,
                fullname:req.body.fullname,
            }
        });
        reply.status(200).send(customer)
    }
    catch (e) {
        console.log(e)
        reply.status(400).send({
        error:"not found"
        })
    }
}

export async function updateCustmoer(req:FastifyRequest<{Params:ICustomerParams ,Body: ICustomerModel,Headers: IHeaders}>,reply:FastifyReply) {
    console.log(req.body)
    try {
        const id = req.params.id
        const customer  =  await client.customer.update({
            where:{id:parseInt(id)},
            data: {
                firstname:req.body.firstname,
                fullname:req.body.fullname
            }
        });
        reply.status(200).send(customer)
    }
    catch (e) {
        console.log(e)
    }
}


export async function deleteCustmoer(req:FastifyRequest<{Params:ICustomerParams ,Body: ICustomerModel,Headers: IHeaders}>,reply:FastifyReply) {
    try {
        const id = req.params.id
        const customer = await client.customer.delete({
            where:{id:parseInt(id)}
        })
        reply.status(200).send({messges:"success"})
     }
     catch (e) {
         console.log(e)
     }
}


    
export async function uploadfileAndBase64(req: FastifyRequest <{Body: ICustomerModel,Headers: IHeaders}> ,reply:FastifyReply) {
    try {
        const files = req["file"]
        console.log(files.path)
        const binaryData = fs.readFileSync(files.path);
        const base64String = Buffer.from(binaryData).toString('base64');
        console.log(base64String)
        reply.status(200).send(files.path)
                // const customer  =  await client.customer.create({
        //     data: {
        //         firstname:req.body.firstname,
        //         // fullname:req.body.fullname,
        //         fullname:files,
        //     }
        // });
     }
     catch (e) {
         console.log(e)
     }
}

export async function uploadfileEncode(req: FastifyRequest <{Body: ICustomerModel,Headers: IHeaders}> ,reply:FastifyReply) {
    try {
        const files = req.body["image"]
        console.log(files)
        const base64File = Buffer.from(files.replace(/^data:image\/\w+;base64,/, ""), 'base64')
        const tempFile = path.join(__dirname,'../../images/jj.png')
        fs.writeFile(tempFile, base64File, 'base64', function(err) {
        console.log(err);
    });
        reply.status(200).send(files)
                // const customer  =  await client.customer.create({
        //     data: {
        //         firstname:req.body.firstname,
        //         // fullname:req.body.fullname,
        //         fullname:files,
        //     }
        // });
     }
     catch (e) {
         console.log(e)
     }
}


    export async function uploadfileAndBody(req: FastifyRequest <{Body: ICustomerModel,Headers: IHeaders}> ,reply:FastifyReply) {
        try {
            // send from postman
            // const files = req["file"]

            const files = req.body
            console.log(files)
        //     const tempFile = path.join(__dirname,`../../images/${files["fileName"]}`)
        //     console.log(tempFile)
        //     fs.writeFile(tempFile, files["fileName"], function(err) {
        //     console.log(err);
        // });
            // const customer  =  await client.customer.create({
            //     data: {
            //         firstname:req.body.firstname,
            //         // fullname:req.body.fullname,
            //         // fullname:files.path,

            //         fullname:files["fileName"]
            //     }
            // });
            // reply.status(200).send(customer)
            // console.log(customer)

            // reply.status(200).send(files)

         }
         catch (e) {
             console.log(e)
         }

         
    }
    
    

    
    