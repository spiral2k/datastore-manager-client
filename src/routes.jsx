import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

/* Components */
import Loader from '@components/Loader/Loader'

/* Routes */
const App = lazy(() => import('@pages/App/App'))

export default (
    <Suspense fallback={<Loader />}>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </Suspense>
)
