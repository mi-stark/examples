const chunk = require('lodash/chunk')

export default {
    render(h){
        return <div>{JSON.stringify(chunk(['a', 'b', 'c', 'd'], 2))}</div>
    }
}
