import{createBrowserRouter} from'react-router-dom'
import Home from './Home/Home';
import Calender from './calendar/Calender';
import Mezmur from './mezmur/Mezmur';
import Sbket from './sbket/Sbket';
import ShortMezmur from './shortMezmur/ShortMezmur';
import Wereb from './wereb/Wereb';
import Connteaner from './Connteaner';
import Favoret from './favorites/favoret';
import Setting from './setting/Setting';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Connteaner/>,
        children:[
            {path:'/',
                element:<Home/>
                },
                {path:'/calender',
                    element:<Calender/>
                    },
                    {path:'/favorite',
                        element:<Favoret/>
                        },
                        {path:'/mezmur',
                            element:<Mezmur/>
                            },
                            {path:'/sbket',
                                element:<Sbket/>
                                },
                                {path:'/shortmezmur',
                                    element:<ShortMezmur/>
                                    },
                                    {path:'/wereb',
                                        element:<Wereb/>
                                        },
                                        {path:'/setting',
                                            element:<Setting/>
                                            },
                                     
                                        
        ]
        }

]);

export default router