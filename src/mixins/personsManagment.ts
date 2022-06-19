const mixin = {
    methods:{
        async getPersons(){
            const response = await fetch('https://expressjs-mongoose-production-279b.up.railway.app/persons');
            if(response.ok){
                return await response.json();
            }
            return [];
        },
        async sendVoteByPerson(data: any){
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            const response = await fetch('https://expressjs-mongoose-production-279b.up.railway.app/persons', requestOptions);
            if(response.ok){
                return await response.json();
            }
            return {};
        }
    }
};

export default mixin;