// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import {
  AnimatedView,
  Panel,
  ServiceCategory as ServiceCategoryComponent
}                         from '../../components';
import Highlight          from 'react-highlight';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import classes from 'primereact/resources/primereact.css';
import theme from 'primereact/resources/themes/cupertino/theme.css';
import { serviceCategoryService } from '../../services';
import {Button} from 'primereact/components/button/Button';
class ServiceCategory extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        serviceCategories:[]
    };
    
  }
  componentWillMount() {
   
    const { actions: { enterServiceCategory } } = this.props;
    enterServiceCategory();
    this.getServiceCategories();
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
    actionTemplate(rowData, column) {
      return <div>         
          <Button type="button" icon="fa-edit" className="ui-button-warning"></Button>
      </div>;
  }



  

  render() {
  
  

    return(
      <AnimatedView>      
        <div className="row">
          <div className="col-xs-12">
            <Panel
              title="Total Service Categories"
              hasTitle={true}
              bodyBackGndColor={'#F4F5F6'}>
              <DataTable value={this.state.serviceCategories} paginator={true} rows={10}>
                <Column filter={true} sortable={true} field="svcCatgCode" header="Service Category Code" />
                <Column filter={true} sortable={true} field="svcCatgDesc" header="Service Category Description" />
                <Column filter={true} sortable={true} field="isActive" header="Is Active" />    
                <Column field="Action" body={this.actionTemplate} style={{textAlign:'center', width: '6em'}}/>            
            </DataTable>              
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
    enterServiceCategory: PropTypes.func.isRequired,
    leaveServiceCategory: PropTypes.func.isRequired
  })
};

export default ServiceCategory;
