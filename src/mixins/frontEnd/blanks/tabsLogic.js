export const tabsLogic = {

    data(){
        return{
            tab:{
                activeIndex: 0
            }
        }
    },
    methods: {
        setTabIndex(index){
            this.tab.activeIndex = index;
        }
    }

}