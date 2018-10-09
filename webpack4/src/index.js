import _ from 'lodash';
import printMe from './print';

function component(){
    var element=document.createElement('div');
    var btn = document.createElement('button');
    // Lodash，现在由此脚本导入
    element.innerHTML=_.join(['Hello','Webpack'],' ');
    btn.innerHTML=' Click me and check the console!';
    btn.onclick=printMe;
    element.appendChild(btn);
    return element;
}
document.body.appendChild(component());