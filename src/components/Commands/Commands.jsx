import React from 'react'

import './Commands.scss'

function Commands() {
    return (
        <div className="help-container container">
            <div className="how">How to?</div>

            <div className="operation">
                <span className="name">SET</span>
                <span className="explanation">
                    Set new variable. printing the {'{'}name{'}'} and {'{'}value{'}'} after change.
                </span>
            </div>

            <div className="operation">
                <span className="name">GET</span>
                <span className="explanation">
                    Get variable {'({'}name{'})'} from the datastore & printing the {'{'}value{'}'}.
                </span>
            </div>

            <div className="operation">
                <span className="name">UNSET</span>
                <span className="explanation">
                    Unset the variable {'({'}name{'})'}, making it just like the variable was never set.
                </span>
            </div>

            <div className="operation">
                <span className="name">NUMEQUALTO</span>
                <span className="explanation">
                    Get the number of variables that are currently set to particular {'{'}value{'}'}.
                </span>
            </div>

            <div className="operation">
                <span className="name">UNDO</span>
                <span className="explanation"> Undo the most recent SET/UNSET command.</span>
            </div>

            <div className="operation">
                <span className="name">REDO</span>
                <span className="explanation">Redo the most recent SET/UNSET command which was undone.</span>
            </div>

            <div className="operation">
                <span className="name">END</span>
                <span className="explanation">Deleting all the data from the datastore. printing &quot;CLEANED&quot; at the end</span>
            </div>
        </div>
    )
}

export default Commands
