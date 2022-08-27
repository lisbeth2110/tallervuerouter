<template>
    <div>
        <table>
            <thead>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>DNI</th>
                <th>TELEFONO</th>
                <th>CORREO</th>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

import axios from 'axios';

export default{
    name:"Mostrar",
    data(){
        return{
    listapaciente:null
        }
    },
    componentes:{

    },
    methods:{

    },
    mounted:function(){
      let direccion="https://api.solodata.es/pacientes2?page=1";
      axios.get(direccion).then(data=>{
        this.listapaciente=data.data;
        console.log(data.data)
      })
    }
}
</script>