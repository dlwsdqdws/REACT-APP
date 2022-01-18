# A REACT APP - Works Exchange Community Web

## Contact Information
Name: Lei Lu

Email: lulei@usc.edu

## Run Project
```
git clone https://github.com/dlwsdqdws/REACT-APP.git
cd REACT_APP
npm run start
```

## Demo
### Home Page
<p align="center"><img src="https://github.com/dlwsdqdws/REACT-APP/blob/main/public/img/homePage.png" alt="Trojan" width="500" /></p>

### Login Page
<p align="center"><img src="https://github.com/dlwsdqdws/REACT-APP/blob/main/public/img/Login.png" alt="Trojan" width="500" /></p>

### Detail Page
<p align="center"><img src="https://github.com/dlwsdqdws/REACT-APP/blob/main/public/img/Detail.png" alt="Trojan" width="500" /></p>

## Project Structure
```
│  App.js                         
│  index.js                       
│  style.js                       
├─store   
|      index.js                  
|      reducer.js                
|
├─common                        
│  |-header                       
│     │  index.js                 
│     │  style.js                 
│     │
│     └─stroe                     
│             actionCreators.js  
│             constants.js       
│             index.js            
│             reducer.js          
│  
│
├─pages                           
│  │
│  ├─home                        
│  │  │  index.js                 
│  │  │  style.js                
│  │  │
│  │  ├─components                
│  │  │      List.js              
│  │  │      Recommed.js         
│  │  │      Topic.js            
│  │  │      Writer.js           
│  │  │
│  │  └─store
│  │          actionCreators.js   
│  │          constains.js        
│  │          index.js            
│  │          reducer.js          
│  │
│  ├─detail                       
│  │  │  index.js                 
│  │  │  loadable.js              
│  │  │  style.js
│  │  │
│  │  └─store
│  │          actionCreators.js
│  │          constains.js
│  │          index.js
│  │          reducer.js
│  │
│  ├─login                        
│  │  │  index.js
│  │  │  style.js
│  │  │
│  │  └─store
│  │          actionCreators.js
│  │          constains.js
│  │          index.js
│  │          reducer.js
│  │
│  └─write                        
│          index.js               
│
└─statics                         
   │  logo.png                    
   │
   └─iconfont                     

```
