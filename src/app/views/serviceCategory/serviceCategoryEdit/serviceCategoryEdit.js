// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import {
  AnimatedView,
  Panel
}                         from '../../components';
import Highlight          from 'react-highlight';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import classes from 'primereact/resources/primereact.css';
import theme from 'primereact/resources/themes/cupertino/theme.css';
import { serviceCategoryService } from '../../services';

class ServiceCategoryEdit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        serviceCategories:[]
    };
    
  }
  componentWillMount() {
   
    const { actions: { enterServiceCategoryEdit } } = this.props;
    enterServiceCategory();
    // this.getServiceCategories();
  }

  componentWillUnmount() {
    const { actions: { leaveServiceCategory } } = this.props;
    leaveServiceCategory();
  }
   getServiceCategories () {
    serviceCategoryService.getServiceCategories().then( Response => {
      this.setState({ serviceCategories: Response });
      //  this.state.serviceCategories = Response;
    });    
    }

  render() {
  
  

    return(
      <AnimatedView>      
        <div className="row">
          <div className="col-xs-12">
            <Panel
              title="Edit Service Category"
              hasTitle={true}
              bodyBackGndColor={'#F4F5F6'}>
              {/* <DataTable value={this.state.serviceCategories} paginator={true} rows={10}>
                <Column filter={true} sortable={true} field="svcCatgCode" header="Service Category Code" />
                <Column filter={true} sortable={true} field="svcCatgDesc" header="Service Category Description" />
                <Column filter={true} sortable={true} field="isActive" header="Is Active" />                
            </DataTable> */}
              
            </Panel>
          </div>
        </div>
       
        <div className="row">
          <div className="col-xs-12">
            
          </div>
        </div>
      </AnimatedView>
    );
  }

}



ServiceCategory.propTypes= {
  actions: PropTypes.shape({
    enterServiceCategoryEdit: PropTypes.func.isRequired,
    leaveServiceCategoryEdit: PropTypes.func.isRequired
  })
};

export default ServiceCategoryEdit;
