import { ref } from 'vue'

export default function useStore() {
    const selected_idx = ref(0)
    const current_item = ref({})
    const items = ref([
        { id: 0, type: 'INTEGER', title: "INTEGER" },
        { id: 1, type: 'STRING', title: "STRING" }
    ])
    
    const json_obj = ref(JSON.stringify({
        resourceType: "QuestionnaireResponse",
        status: "in-progress",
        title: "state.title_input",
        item: items.value
      }, undefined, 2))

    const types = ref([
        { name: "INTEGER" },
        { name: "STRING" }
    ])

    function add_item(item) {
        console.log("adding item : " + item)
        items.value.push({ id: items.value.length, type: item });
        json_obj.value = JSON.stringify({
            resourceType: "QuestionnaireResponse",
            status: "in-progress",
            title: "state.title_input",
            item: items.value
          }, undefined, 2)
    }
    function select_item(idx){
        // console.log("select item : " + idx)
        selected_idx.value = idx
        current_item.value = items.value[idx]
    }
    function set_item_title(idx, title) {
        console.log("setting item["+idx+"] title : " + title)
        current_item.value = {...current_item.value, title: title}
        for(var i=0; i<items.value.length; i++){
            if(items.value[i].id === idx){
                items.value[i].title = title
                json_obj.value = JSON.stringify({
                    resourceType: "QuestionnaireResponse",
                    status: "in-progress",
                    title: "state.title_input",
                    item: items.value
                  }, undefined, 2)
                return;
            }
        }
        // items.value.push({ id: items.value.length, type: item });
    }
    return {
        selected_idx,
        current_item,
        items,
        json_obj,
        types,
    
        add_item,
        select_item,
        set_item_title
    }
}