import ReactDom from 'react-dom';
import IndexPage from "./index-page";
import indexStore from "./index-store";

function update(){
    ReactDom.render(
        IndexPage(),
        document.getElementById('app')
    )
}

update();
indexStore.subscribe(update);