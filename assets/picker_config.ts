/* eslint-disable @typescript-eslint/naming-convention */
export const pickerConfig = {
    'CUSTOMER': {
        'headerLabel': 'Choose Customer',
        'headerDisplayKey': 'text.choose_customer',
        'searchKey': 'dataPicker.customer.body.search_customers',
        'sortItems': [{
            'displayName': 'Customer Name',
            'displayKey': 'text.customer_name',
            'action': 'sorting',
            'actionType': 'customer_first_name'
        }, {
            'displayName': 'Number of Jobs',
            'displayKey': 'dataPicker.customer.sort.no_of_jobs',
            'action': 'sorting',
            'actionType': 'no_of_jobs'
        }, {
            'displayName': 'Created Date',
            'displayKey': 'created.at.text',
            'action': 'sorting',
            'actionType': 'created_at'
        }],
        'tabs': [
            {
                'name': 'Currently Associated Customers',
                'displayKey': 'dataPicker.customer.tabs.currently_assigned',
                'dataKey': 'Custom'
            },
            {
                'name': 'Existing Customers',
                'displayKey': 'dataPicker.customer.tabs.existing_customers',
                'dataKey': 'Existing'
            },
            {
                'name': 'New Customer',
                'displayKey': 'text.new_customer',
                'dataKey': 'New'
            }
        ],
        'dataUrl': '/customers',
        'params': {
            'pageKey': 'page',
            'countKey': 'count',
            'searchKey': 'filter.keyword',
            'uniqueSearchKey': 'filter.customer_uid'
        },
        'footerSelectLabel': 'Choose Customer',
        'footerSelectDisplayKey': 'text.choose_customer',
        'footerQuickCreateLabel': 'Create & Choose Customer',
        'footerQuickCreateDisplayKey': 'dataPicker.customer.footer.create_customer',
        'compareWith':'customer_uid',
    },
    'ORGANIZATION': {
        'headerLabel': 'Choose Organization',
        'headerDisplayKey': 'choose.organization',
        'searchKey': 'dataPicker.organization.body.search_organizations',
        'sortItems': [{
            'displayName': 'Organization Name',
            'displayKey': 'text.organization_name',
            'action': 'sorting',
            'actionType': 'organization_name'
        }, {
            'displayName': 'Created Date',
            'displayKey': 'created.at.text',
            'action': 'sorting',
            'actionType': 'created_at'
        }],
        'tabs': [
            {
                'name': 'Existing Organizations',
                'displayKey': 'dataPicker.organization.tabs.existing_organizations',
                'dataKey': 'Existing'
            },
            {
                'name': 'New Organization',
                'displayKey': 'text.new_organization',
                'dataKey': 'New'
            }
        ],
        'dataUrl': '/organization',
        'params': {
            'pageKey': 'page',
            'countKey': 'count',
            'searchKey': 'filter.keyword',
            'uniqueSearchKey': 'filter.organization_uid'
        },
        'footerSelectLabel': 'Choose Organization',
        'footerSelectDisplayKey': 'choose.organization',
        'footerQuickCreateLabel': 'Create & Choose Organization',
        'footerQuickCreateDisplayKey': 'dataPicker.organization.footer.create_organization',
        'compareWith':'organization_uid'
    },
    'PROPERTY': {
        'headerLabel': 'Choose Property',
        'headerDisplayKey': 'text.choose_property',
        'searchKey': 'dataPicker.property.body.search_properties',
        'sortItems': [{
            'displayName': 'Property Name',
            'displayKey': 'text.property_name',
            'action': 'sorting',
            'actionType': 'property_name'
        }, {
            'displayName': 'Created Date',
            'displayKey': 'created.at.text',
            'action': 'sorting',
            'actionType': 'created_at'
        }],
        'tabs': [
            {
                'name': 'Currently Associated Properties',
                'displayKey': 'dataPicker.property.tabs.currently_assigned',
                'dataKey': 'Custom'
            },
            {
                'name': 'Existing Properties',
                'displayKey': 'dataPicker.property.tabs.existing_properties',
                'dataKey': 'Existing'
            },
            {
                'name': 'New Property',
                'displayKey': 'text.new_property',
                'dataKey': 'New'
            }
        ],
        'dataUrl': '/property',
        'params': {
            'pageKey': 'page',
            'countKey': 'count',
            'searchKey': 'filter.keyword',
            'uniqueSearchKey': 'filter.property_uid'
        },
        'footerSelectLabel': 'Choose Property',
        'footerSelectDisplayKey': 'text.choose_property',
        'footerQuickCreateLabel': 'Create & Choose Property',
        'footerQuickCreateDisplayKey': 'dataPicker.property.footer.create_property',
        'compareWith':'property_uid'
    },
    'ASSETS': {
        'headerLabel': 'Choose Asset',
        'headerDisplayKey': 'text.choose_asset',
        'createNewData': {
            'label': 'New Asset',
            'displayKey': 'text.new_asset',
            'linkUrl': '/asset_management/new'
        },
        'searchKey': 'dataPicker.asset.body.search_assets',
        'sortItems': [{
            'displayName': 'Asset Code',
            'displayKey': 'asset_code',
            'action': 'sorting',
            'actionType': 'asset_code'
        }, {
            'displayName': 'Created At',
            'displayKey': 'created.at.text',
            'action': 'sorting',
            'actionType': 'created_at'
        }, {
            'displayName': 'Warranty Expiry Date',
            'displayKey': 'text.warranty_expiry_date',
            'action': 'sorting',
            'actionType': 'warranty_expiry_date'
        }],
        'tabs': [
            {
                'name': 'Currently Associated Assets',
                'displayKey': 'dataPicker.asset.tabs.currently_assigned',
                'dataKey': 'Custom'
            },
            {
                'name': 'Existing Assets',
                'displayKey': 'dataPicker.asset.tabs.existing_assets',
                'dataKey': 'Existing'
            },
            {
                'name': 'New Asset',
                'displayKey': 'text.new_asset',
                'dataKey': 'New'
            }
        ],
        'dataUrl': '/assets',
        'params': {
            'pageKey': 'page',
            'countKey': 'count',
            'searchKey': 'filter.keyword',
            'uniqueSearchKey': 'filter.asset_uid'
        },
        'footerSelectLabel': 'Choose Asset',
        'footerSelectDisplayKey': 'text.choose_asset',
        'footerQuickCreateLabel': 'Create & Choose Asset',
        'footerQuickCreateDisplayKey': 'dataPicker.asset.footer.create_asset',
        'compareWith':'asset_uid'
    },
    'SERVICE_CONTRACTS': {
        'headerLabel': 'Choose Contract',
        'headerDisplayKey': 'text.choose_contract',
        'createNewData': {
            'label': 'New Contract',
            'displayKey': 'new.contract.text',
            'linkUrl': '/contracts/new'
        },
        'searchKey': 'dataPicker.contract.body.search_contracts',
        'sortItems': [{
            'displayName': 'Contract Number',
            'displayKey': 'dataPicker.contract.sort.contract_number',
            'action': 'sorting',
            'actionType': 'contract_number'
        }, {
            'displayName': 'Contract Expiry Date',
            'displayKey': 'dataPicker.contract.sort.contract_expiry',
            'action': 'sorting',
            'actionType': 'end_date'
        }, {
            'displayName': 'Created At',
            'displayKey': 'created.at.text',
            'action': 'sorting',
            'actionType': 'created_at'
        }],
        'tabs': [
            {
                'name': 'Existing Contracts',
                'displayKey': 'dataPicker.contract.tabs.existing_contracts',
                'dataKey': 'Existing'
            }
        ],
        'dataUrl': '/service_contract',
        'params': {
            'pageKey': 'page',
            'countKey': 'count',
            'searchKey': 'filter.keyword',
            'uniqueSearchKey': 'filter.contract_uid'
        },
        'footerSelectLabel': 'Choose Contract',
        'footerSelectDisplayKey': 'text.choose_contract',
        'compareWith':'contract_uid'
    },
    'JOB': {
        'headerLabel': 'Choose Job',
        'headerDisplayKey': 'text.choose_job',
        'searchKey': 'text.search_jobs.placeholder',
        'sortItems': [{
            'displayName': 'Job ID',
            'displayKey': 'dataPicker.job.sort.work_order_number',
            'action': 'sorting',
            'actionType': 'work_order_number'
        }, {
            'displayName': 'Job Priority',
            'displayKey': 'text.job_priority',
            'action': 'sorting',
            'actionType': 'job_priority'
        }, {
            'displayName': 'Scheduled Date & Time',
            'displayKey': 'dataPicker.job.sort.scheduled_start_time',
            'action': 'sorting',
            'actionType': 'scheduled_start_time'
        }, {
            'displayName': 'Due Date',
            'displayKey': 'due.date.text',
            'action': 'sorting',
            'actionType': 'due_date'
        }],
        'dataUrl': '/jobs',
        'params': {
            'pageKey': 'page',
            'countKey': 'count',
            'searchKey': 'filter.keyword',
            'uniqueSearchKey': 'filter.job_uid'
        },
        'footerSelectLabel': 'Choose Job',
        'footerSelectDisplayKey': 'text.choose_job',
        'compareWith':'job_uid'
    },
    'RECURRENCE_JOB_MASTER': {
        'headerLabel': 'Choose Job',
        'headerDisplayKey': 'text.choose_job',
        'searchKey': 'text.search_recurring_jobs.placeholder',
        'sortItems': [
            {
                'displayName': 'Created At',
                'displayKey': 'dataPicker.jobs.filter.created_at',
                'action': 'sorting',
                'actionType': 'created_at'
            }
        ],
        'dataUrl': '/recurring_jobs',
        'params': {
            'pageKey': 'page',
            'countKey': 'count',
            'searchKey': 'filter.keyword',
            'uniqueSearchKey': 'filter.job_uid'
        },
        'footerSelectLabel': 'Choose Job',
        'footerSelectDisplayKey': 'text.choose_job',
        'compareWith':'job_uid'
    },
    'ESTIMATES': {
        'headerLabel': 'Choose Quote',
        'headerDisplayKey': 'text.choose_quote',
        'searchKey': 'dataPicker.quote.body.search_quotes',
        'sortItems': [{
            'displayName': 'Quote Number',
            'displayKey': 'dataPicker.quote.sort.estimate_no',
            'action': 'sorting',
            'actionType': 'estimate_no'
        }, {
            'displayName': 'Quote Date',
            'displayKey': 'text.quote_date',
            'action': 'sorting',
            'actionType': 'estimate_date'
        }, {
            'displayName': 'Expiry Date',
            'displayKey': 'expiry_date',
            'action': 'sorting',
            'actionType': 'expiry_date'
        }, {
            'displayName': 'Created At',
            'displayKey': 'created.at.text',
            'action': 'sorting',
            'actionType': 'created_at'
        }],
        'tabs': [
            {
                'name': 'Existing Quotes',
                'displayKey': 'dataPicker.quote.tabs.existing_quotes',
                'dataKey': 'Existing'
            }
        ],
        'dataUrl': '/estimate',
        'params': {
            'pageKey': 'page',
            'countKey': 'count',
            'searchKey': 'filter.keyword',
            'uniqueSearchKey': 'filter.estimate_uid'
        },
        'footerSelectLabel': 'Choose Quote',
        'footerSelectDisplayKey': 'text.choose_quote',
        'compareWith':'estimate_uid'
    },
    'INVOICE': {
        'headerLabel': 'Choose Invoice',
        'headerDisplayKey': 'text.choose_invoice',
        'searchKey': 'dataPicker.invoice.body.search_invoices',
        'sortItems': [{
            'displayName': 'Invoice Number',
            'displayKey': 'dataPicker.invoice.sort.invoice_no',
            'action': 'sorting',
            'actionType': 'invoice_no'
        }, {
            'displayName': 'Invoice Date',
            'displayKey': 'text.invoice_date',
            'action': 'sorting',
            'actionType': 'invoice_date'
        }, {
            'displayName': 'Created At',
            'displayKey': 'created.at.text',
            'action': 'sorting',
            'actionType': 'created_at'
        }],
        'tabs': [
            {
                'name': 'Existing Invoices',
                'displayKey': 'dataPicker.invoice.tabs.existing_invoices',
                'dataKey': 'Existing'
            }
        ],
        'dataUrl': '/invoice',
        'params': {
            'pageKey': 'page',
            'countKey': 'count',
            'searchKey': 'filter.keyword',
            'uniqueSearchKey': 'filter.invoice_uid'
        },
        'footerSelectLabel': 'Choose Invoice',
        'footerSelectDisplayKey': 'text.choose_invoice',
        'compareWith':'invoice_uid'
    },
    'REQUEST_SERVICES': {
        'headerLabel': 'Choose Service',
        'headerDisplayKey': 'choose.service.text',
        'searchKey': 'search.services.text',
        'sortItems': [{
            'displayName': 'Display Order',
            'displayKey': 'display.order.text',
            'action': 'sorting',
            'actionType': 'display_order'
        }, {
            'displayName': 'Created At',
            'displayKey': 'dataPicker.quote.sort.created_at',
            'action': 'sorting',
            'actionType': 'created_at'
        }],
        'tabs': [
            {
                'name': 'Existing Services',
                'displayKey': 'existing.services.text',
                'dataKey': 'Existing'
            }
        ],
        'dataUrl': '/request/services',
        'params': {
            'pageKey': 'page',
            'countKey': 'count',
            'searchKey': 'filter.keyword',
            'uniqueSearchKey': 'filter.service_uid'
        },
        'footerSelectLabel': 'Choose Service',
        'footerSelectDisplayKey': 'choose.service.text'
    },
    'REQUEST': {
        'headerLabel': 'Choose Request',
        'headerDisplayKey': 'text.choose_request',
        'searchKey': 'text.search_requests',
        'sortItems': [{
            'displayName': 'Request Title',
            'displayKey': 'request.title.text',
            'action': 'sorting',
            'actionType': 'request_title'
        }, {
            'displayName': 'Request Priority',
            'displayKey': 'text.request_priority',
            'action': 'sorting',
            'actionType': 'request_priority'
        }, {
            'displayName': 'Due Date',
            'displayKey': 'due.date.text',
            'action': 'sorting',
            'actionType': 'due_date'
        }, {
            'displayName': 'Created At',
            'displayKey': 'created.at.text',
            'action': 'sorting',
            'actionType': 'created_at'
        }],
        'dataUrl': '/request',
        'params': {
            'pageKey': 'page',
            'countKey': 'count',
            'searchKey': 'filter.keyword',
            'uniqueSearchKey': 'filter.request_uid'
        },
        'footerSelectLabel': 'Choose Request',
        'footerSelectDisplayKey': 'text.choose_request',
        'compareWith':'request_uid'
    },
    'PROJECT': {
        'headerLabel': 'Choose Project',
        'headerDisplayKey': 'text.choose_project',
        'searchKey': 'text.search_projects',
        'sortItems': [{
            'displayName': 'Project Title',
            'displayKey': 'text.project.name',
            'action': 'sorting',
            'actionType': 'project_name'
        }, {
            'displayName': 'Project Priority',
            'displayKey': 'text.project_priority',
            'action': 'sorting',
            'actionType': 'project_priority'
        },
         {
            'displayName': 'Created At',
            'displayKey': 'created.at.text',
            'action': 'sorting',
            'actionType': 'created_at'
        }],
        'dataUrl': '/projects',
        'params': {
            'pageKey': 'page',
            'countKey': 'count',
            'searchKey': 'filter.keyword',
            'uniqueSearchKey': 'filter.project_uid'
        },
        'footerSelectLabel': 'Choose Project',
        'footerSelectDisplayKey': 'text.choose_project',
        'compareWith':'project_uid'
    },
    'VENDOR': {
        'headerLabel': 'Choose Vendor',
        'headerDisplayKey': 'text.choose_vendor',
        'searchKey': 'dataPicker.vendor.body.search_vendors',
        'sortItems': [{
            'displayName': 'Vendor Name',
            'displayKey': 'text.vendor_name',
            'action': 'sorting',
            'actionType': 'vendor_name'
        }, {
            'displayName': 'Created Date',
            'displayKey': 'created.at.text',
            'action': 'sorting',
            'actionType': 'created_at'
        }],
        'tabs': [],
        'dataUrl': '/vendors',
        'params': {
            'pageKey': 'page',
            'countKey': 'count',
            'searchKey': 'filter.keyword',
            'uniqueSearchKey': 'filter.vendor_uid'
        },
        'footerSelectLabel': 'Choose Vendor',
        'footerSelectDisplayKey': 'text.choose_vendor',
        'footerQuickCreateLabel': 'Create & Choose Vendor',
        'footerQuickCreateDisplayKey': 'dataPicker.vendor.footer.create_vendor',
        'compareWith':'vendor_uid'
    },
    'USER': {
        'headerLabel': 'Choose User',
        'headerDisplayKey': 'text.choose_user',
        'searchKey': 'users.table.search_place_holder',
        'sortItems': [{
            'displayName': 'Created Date',
            'displayKey': 'created.at.text',
            'action': 'sorting',
            'actionType': 'created_at'
        }],
        'tabs': [
            {
                'name': 'Existing Users',
                'displayKey': 'text.user.tabs.existing_users',
                'dataKey': 'Existing'
            },
            {
                'name': 'New User',
                'displayKey': 'breadcrumb.employees.new_employee',
                'dataKey': 'New'
            }
        ],
        'dataUrl': '/user',
        'params': {
            'pageKey': 'page',
            'countKey': 'count',
            'searchKey': 'filter.keyword',
            'uniqueSearchKey': 'filter.user_uid'
        },
        'footerSelectLabel': 'Choose User',
        'footerSelectDisplayKey': 'text.choose_user',
        'footerQuickCreateLabel': 'Create & Choose User',
        'footerQuickCreateDisplayKey': 'text.user.footer.create_user',
        'compareWith':'user_uid'
    },
};
/* eslint-enable @typescript-eslint/naming-convention */
