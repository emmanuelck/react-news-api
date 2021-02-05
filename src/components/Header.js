import React from 'react'; //IMR

//SFC
const Header = ({titulo}) => {
    return (
        <div className="container">
            <div className="header">
                <div className="row text-center">
                    <div className="col-12">
                        <h2 className="logo">
                            {titulo}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Header;