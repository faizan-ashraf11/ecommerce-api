import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import {useExpressServer} from "routing-controllers";
import * as path from 'path';
import config from './config/config';
import { loggerMiddleware } from './common/middleware/loggerMiddleware';
import AppDataSource from './config/dataSourceConfig';
import { initializeSwagger } from './config/swaggerConfig';

export default class App{

    public app: express.Application;

    constructor(
        
    ){
        console.clear();
        this.app = express();
        this.initializeDataSource();
        this.initializeMiddleware();
        this.initializeController();
        this.setStaticImages();
        initializeSwagger(this.app);
    }

    private initializeDataSource(){
        AppDataSource.initialize().then(()=>{
            console.log("Connection Successfull With Database");
        }).catch((error)=>{
            console.log("error Occurs While Connecting with DB. Error: " , error);
        })
    }

    private initializeMiddleware(){
        console.log('Initializing Node Middleware');
        const corsOptions = {
            origin: '*',
            methods: 'GET,POST,PUT,DELETE',
            allowedHeaders: 'Content-Type, Authorization',
        };
        this.app.use(cors(corsOptions));
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb' , extended: true }));
        this.app.use(loggerMiddleware);
    }

    private initializeController(){
        console.log('Initializing Node Controllers');
        useExpressServer(
            this.app,
            {
                cors: true,
                routePrefix: '',
                middlewares: [path.join(__dirname + 'middleware/errorMiddleware.*')],
                controllers: [path.join(__dirname + '/controller/*.*')],
                defaultErrorHandler: false
            }
        )
    }

    private setStaticImages(){
        this.app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
    }

    public listen(){
        this.app.listen(config.server.port, ()=>{
            console.log(`My Node APP is listening to the ${config.server.port}`);
        })
    }

}