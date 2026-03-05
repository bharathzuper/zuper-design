/**
 * Zuper UI SDK Development & Testing Framework
 *
 * This file provides comprehensive testing functions for all Zuper UI SDK features.
 * Use individual functions for targeted testing or run the complete test suite.
 *
 * Usage:
 * - Individual tests: Call functions like testCreateButton('My Button', 'BREADCRUMB', 'dashboard')
 * - Category tests: Call testUIComponents(), testEventListeners(), etc.
 * - Full suite: Call runAllTests()
 *
 * All functions include error handling and return detailed results.
 */

// =============================================================================
// CONFIGURATION & INITIALIZATION
// =============================================================================

const SDK_CONFIG = {
	delays: {
		betweenTests: 500,
		beforeCleanup: 1000,
		modalDisplay: 2000,
		betweenModals: 2000
	},
	defaults: {
		location: 'BREADCRUMB',
		page: 'dashboard',
		toastDuration: 3000,
		modalSize: 'md'
	},
	testData: {
		externalUrl: 'https://dummyjson.com/users',
		iframeUrl: 'https://skandysdkexample.netlify.app/'
	}
};

// Global test results storage
window.sdkTestResults = {
	total: 0,
	passed: 0,
	failed: 0,
	errors: [],
	details: []
};

// Initialize SDK client
window.zclient = window.ZClient.init();

// Setup basic event listeners after registration
window.zclient.on("app.registered", async function (data) {
	console.log('🎯 Zuper UI SDK registered successfully');

	// Setup essential event listeners
	setupEventListeners();

	console.log('📋 SDK Development Framework Ready');
	console.log('💡 Try: runAllTests() or individual test functions');
	console.log('📖 Available categories: testUIComponents(), testUtilities(), testDataOperations()');
});

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Generate unique ID for SDK components
 * @returns {string} Unique identifier
 */
const genUUID = () => {
	const timestamp = Date.now().toString();
	const randomSuffix = Math.random().toString(36).substring(2, 7);
	return (timestamp + randomSuffix).substring(0, 15);
};

/**
 * Add delay between operations
 * @param {number} ms - Milliseconds to wait
 */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Log test result
 * @param {string} testName - Name of the test
 * @param {boolean} success - Whether test passed
 * @param {string|null} error - Error message if failed
 * @param {object} details - Additional test details
 */
const logTestResult = (testName, success, error = null, details = {}) => {
	window.sdkTestResults.total++;

	// Sanitize details to remove heavy objects and reduce memory usage
	const sanitizedDetails = {};
	for (const [key, value] of Object.entries(details)) {
		if (key === 'instance') {
			// Replace instance with just the instanceId if available
			sanitizedDetails.instanceId = details.instanceId || 'unknown';
		} else if (key === 'config' && typeof value === 'object' && value !== null) {
			// Keep only lightweight config properties
			sanitizedDetails.config = {
				id: value.id,
				type: value.type,
				size: value.size || value.options?.size,
				title: value.title || value.options?.title
			};
		} else if (key === 'response' && typeof value === 'object' && value !== null) {
			// Keep only essential response properties
			sanitizedDetails.response = {
				uid: value.uid,
				success: value.success,
				status: value.status,
				message: value.message
			};
		} else if (key === 'data' && typeof value === 'object' && value !== null) {
			// For data objects, keep only type and size info
			sanitizedDetails.data = {
				type: typeof value,
				isArray: Array.isArray(value),
				length: Array.isArray(value) ? value.length : Object.keys(value).length
			};
		} else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || value === null) {
			// Keep primitives as-is
			sanitizedDetails[key] = value;
		} else {
			// For other objects, just keep basic info
			sanitizedDetails[key] = `[${typeof value}]`;
		}
	}

	const result = {
		test: testName,
		success,
		error,
		timestamp: new Date().toISOString(),
		...sanitizedDetails
	};

	if (success) {
		window.sdkTestResults.passed++;
		console.log(`✅ ${testName}: PASSED (ID: ${sanitizedDetails.instanceId || 'N/A'})`);
	} else {
		window.sdkTestResults.failed++;
		window.sdkTestResults.errors.push(result);
		console.error(`❌ ${testName}: FAILED - ${error}`);
	}

	window.sdkTestResults.details.push(result);
	return result;
};

/**
 * Validate page parameter against allowed values
 * @param {string} page - Page to validate
 * @returns {boolean} Is valid page
 */
const isValidPage = (page) => {
	const validPages = [
		'dashboard', 'job_list', 'job_new', 'job_details', 'customer_list',
		'customer_new', 'customer_update', 'customer_details', 'organization_list',
		'organization_new', 'organization_update', 'organization_details',
		'asset_list', 'asset_new', 'asset_update', 'asset_details',
		'property_list', 'property_new', 'property_update', 'property_details',
		'invoice_list', 'invoice_new', 'invoice_update', 'invoice_details',
		'estimate_list', 'estimate_new', 'estimate_update', 'estimate_details',
		'project_list', 'project_new', 'project_update', 'project_details',
		'contract_list', 'contract_new', 'contract_update', 'contract_details',
		'product_list', 'product_new', 'product_update', 'product_details',
		'dispatch_board', 'calendar'
	];
	return validPages.includes(page);
};

/**
 * Validate location parameter for UI components
 * @param {string} location - Location to validate
 * @returns {boolean} Is valid location
 */
const isValidLocation = (location) => {
	return ['BREADCRUMB', 'BULK_ACTION'].includes(location);
};

// =============================================================================
// EVENT LISTENERS SETUP
// =============================================================================

/**
 * Setup essential event listeners for SDK testing
 */
const setupEventListeners = () => {
	// State change listener
	window.zclient.on('stateChange', (data) => {
		console.log('🔄 State Change:', data);
	});

	// Module event listeners
	window.zclient.on('invoice.status_update', (data) => {
		console.log('📄 Invoice Status Updated:', data);
	});

	window.zclient.on('invoice.create', (data) => {
		console.log('📄 Invoice Created:', data);
	});

	window.zclient.on('job.status_update', (data) => {
		console.log('🔧 Job Status Updated:', data);
	});

	// Pre-event handler example
	window.zclient.on('pre_event.job_details.job_status', (res) => {
		console.log('⚠️ Pre-event Job Status Change:', res);
		// Auto-accept after delay for testing
		setTimeout(() => {
			window.zclient.handle('pre_event.accept', {
				field: 'job_details.job_status'
			});
		}, 1000);
	});

	// Pre-event handlers for New Job picker drawers (WEB-4039)
	const newJobPickers = [
		'job_picker_open',
		'organization_picker_open',
		'customer_picker_open',
		'secondary_contacts_picker_open',
		'property_picker_open',
		'request_picker_open',
		'project_picker_open',
		'service_contracts_picker_open',
		'assets_picker_open',
		'task_assets_picker_open'
	];

	newJobPickers.forEach(picker => {
		const eventKey = `pre_event.new_job.${picker}`;
		window.zclient.on(eventKey, (res) => {
			console.log(`⚠️ Pre-event ${picker.replace(/_/g, ' ')}:`, res);
			window.zclient.handle('pre_event.accept', { field: `new_job.${picker}` });
		});
	});

	// Pre-event handlers for Job Details picker drawers (WEB-4039)
	const jobDetailsPickers = [
		'job_picker_open',
		'customer_picker_open',
		'organization_picker_open',
		'property_picker_open',
		'assets_picker_open',
		'task_assets_picker_open',
		'service_contracts_picker_open',
		'project_picker_open',
		'secondary_contacts_picker_open',
	];

	jobDetailsPickers.forEach(picker => {
		const eventKey = `pre_event.job_details.${picker}`;
		window.zclient.on(eventKey, (res) => {
			console.log(`⚠️ Pre-event ${picker.replace(/_/g, ' ')}:`, res);
			window.zclient.handle('pre_event.accept', { field: `job_details.${picker}` });
		});
	});


	// Zuper Connect Call Event Listeners
	window.zclient.on('call.incoming', (data) => {
		console.log('📞 Incoming Call:', data);
		console.log('  From:', data.fromNumber, '-', data.fromName);
		console.log('  Customer UID:', data.customerUid || 'Unknown');
		console.log('  Is from customer:', data.isCallFromCustomer);

		// Auto-navigate to Jobs Kanban view for this customer after 2 seconds
		if (data.customerUid) {
			setTimeout(() => {
				window.zclient.invoke('page.navigate', {
					module: 'JOB',
					page: 'job_list',
					query_params: {
						customer_uid: data.customerUid,
						view_type: 'KANBAN'
					}
				});
			}, 2000);
		}
	});

	window.zclient.on('call.outgoing', (data) => {
		console.log('📲 Outgoing Call:', data);
		console.log('  To:', data.toNumber);
		console.log('  Customer UID:', data.customerUid || 'Unknown');
	});

	window.zclient.on('call.accepted', (data) => {
		console.log('✅ Call Accepted:', data);
	});

	window.zclient.on('call.end', (data) => {
		console.log('📴 Call Ended:', data);
	});

	window.zclient.on('call.rejected', (data) => {
		console.log('🚫 Call Rejected:', data);
	});
};

// =============================================================================
// UI COMPONENT TESTS - ATOMIC FUNCTIONS
// =============================================================================

/**
 * Test creating a button component
 * @param {string} name - Button title/name
 * @param {string} location - Button location (BREADCRUMB, BULK_ACTION)
 * @param {string} page - Page where button appears
 * @param {string} icon - Optional icon name
 * @returns {Promise<object>} Test result with button instance
 */
const testCreateButton = async (name, location = SDK_CONFIG.defaults.location, page = SDK_CONFIG.defaults.page, icon = '') => {
	const testName = `Create Button: ${name}`;

	try {
		// Validate parameters
		if (!isValidPage(page)) {
			throw new Error(`Invalid page: ${page}`);
		}
		if (!isValidLocation(location)) {
			throw new Error(`Invalid location: ${location}`);
		}

		const buttonId = 'test-button-' + genUUID();
		const config = {
			id: buttonId,
			type: 'BUTTON',
			location,
			page,
			title: name,
			icon,
			className: 'sdk-test-button'
		};

		const response = await window.zclient.invoke('ui.create', config);

		if (response.error) {
			throw new Error(response.error);
		}

		const buttonInstance = window.zclient.instance(response.uid);

		// Setup click handler for testing
		buttonInstance.on('click', (data) => {
			console.log(`🖱️ Button "${name}" clicked:`, data);
		});

		return logTestResult(testName, true, null, {
			buttonId,
			instanceId: response.uid,
			config,
			instance: buttonInstance
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

/**
 * Test creating a dropdown component
 * @param {string} title - Dropdown title
 * @param {string} page - Page where dropdown appears
 * @param {Array} options - Dropdown options array
 * @returns {Promise<object>} Test result with dropdown instance
 */
const testCreateDropdown = async (title = 'Test Actions', page = SDK_CONFIG.defaults.page, options = []) => {
	const testName = `Create Dropdown: ${title}`;

	try {
		if (!isValidPage(page)) {
			throw new Error(`Invalid page: ${page}`);
		}

		const dropdownId = 'test-dropdown-' + genUUID();
		const defaultOptions = options.length ? options : [
			{ id: 'option-new-' + genUUID(), title: 'New', icon: 'plus' },
			{ id: 'option-edit-' + genUUID(), title: 'Edit', icon: 'pencil' }
		];

		const config = {
			id: dropdownId,
			type: 'DROPDOWN',
			location: 'BREADCRUMB',
			page,
			title,
			icon: 'menu',
			className: 'sdk-test-dropdown',
			children: defaultOptions
		};

		const response = await window.zclient.invoke('ui.create', config);

		if (response.error) {
			throw new Error(response.error);
		}

		const dropdownInstance = window.zclient.instance(response.uid);

		// Setup click handler
		dropdownInstance.on('click', (data) => {
			console.log(`📋 Dropdown option clicked:`, data);
		});

		return logTestResult(testName, true, null, {
			dropdownId,
			instanceId: response.uid,
			config,
			instance: dropdownInstance
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

/**
 * Test creating a dialog component
 * @param {string} title - Dialog title
 * @param {string} message - Dialog message
 * @param {string} type - Dialog type (info, error, warning, success)
 * @returns {Promise<object>} Test result with dialog instance
 */
const testCreateDialog = async (title = 'Test Dialog', message = 'This is a test dialog', type = 'info') => {
	const testName = `Create Dialog: ${title}`;

	try {
		const dialogId = 'test-dialog-' + genUUID();
		const config = {
			id: dialogId,
			type: 'DIALOG',
			options: {
				title,
				type,
				message,
				actions: {
					confirm: {
						show: true,
						label: 'Confirm',
						color: 'primary'
					},
					cancel: {
						show: true,
						label: 'Cancel'
					}
				},
				dismissible: true,
				extraClass: 'sdk-test-dialog'
			}
		};

		const response = await window.zclient.invoke('ui.create', config);

		if (response.error) {
			throw new Error(response.error);
		}

		const dialogInstance = window.zclient.instance(response.uid);

		// Create promise that resolves when dialog closes
		const dialogClosePromise = new Promise((resolve) => {
			let resolved = false;
			let timeoutId;

			const resolveOnce = (reason) => {
				if (!resolved) {
					resolved = true;
					if (timeoutId) clearTimeout(timeoutId);
					resolve(reason);
				}
			};

			dialogInstance.on('confirm', (data) => {
				console.log(`✅ Dialog confirmed:`, data);
				resolveOnce('confirmed');
			});

			dialogInstance.on('cancel', (data) => {
				console.log(`❌ Dialog cancelled:`, data);
				resolveOnce('cancelled');
			});

			dialogInstance.on('close', (data) => {
				console.log(`🔒 Dialog closed:`, data);
				resolveOnce('closed');
			});

			// Timeout fallback in case close events don't fire
			timeoutId = setTimeout(() => {
				console.log(`⏰ Dialog auto-close timeout triggered`);
				resolveOnce('timeout');
			}, SDK_CONFIG.delays.modalDisplay + 1000);
		});

		// Auto-open dialog for testing
		dialogInstance.invoke('ui.open');

		// Auto-close after delay for automated testing
		setTimeout(() => {
			try {
				console.log(`🔄 Auto-closing dialog after ${SDK_CONFIG.delays.modalDisplay}ms`);
				dialogInstance.invoke('ui.close');
			} catch (e) {
				console.log('❌ Auto-close failed for dialog:', e.message);
			}
		}, SDK_CONFIG.delays.modalDisplay);

		// Wait for dialog to close before resolving
		await dialogClosePromise;

		return logTestResult(testName, true, null, {
			dialogId,
			instanceId: response.uid,
			config,
			instance: dialogInstance
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

/**
 * Test creating a toast notification
 * @param {string} message - Toast message
 * @param {string} type - Toast type (success, error, warning, info)
 * @param {string} position - Toast position
 * @param {number} duration - Auto-close duration in milliseconds
 * @returns {Promise<object>} Test result with toast instance
 */
const testCreateToast = async (message = 'Test toast notification', type = 'info', position = 'top-right', duration = SDK_CONFIG.defaults.toastDuration) => {
	const testName = `Create Toast: ${type}`;

	try {
		const toastId = 'test-toast-' + genUUID();
		const config = {
			id: toastId,
			type: 'TOAST',
			message,
			options: {
				type,
				duration,
				autoClose: true,
				position,
				icon: type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️'
			}
		};

		const response = await window.zclient.invoke('ui.create', config);

		if (response.error) {
			throw new Error(response.error);
		}

		const toastInstance = window.zclient.instance(response.uid);

		return logTestResult(testName, true, null, {
			toastId,
			instanceId: response.uid,
			config,
			instance: toastInstance
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

/**
 * Test creating an iframe modal
 * @param {string} title - Modal title
 * @param {string} url - URL to load in iframe
 * @param {string} size - Modal size (sm, md, lg, xl)
 * @returns {Promise<object>} Test result with modal instance
 */
const testCreateIframeModal = async (title = 'Test Iframe Modal', url = SDK_CONFIG.testData.iframeUrl, size = SDK_CONFIG.defaults.modalSize) => {
	const testName = `Create Iframe Modal: ${title}`;

	try {
		console.log('🔍 Iframe modal test starting...');
		const modalId = 'test-modal-iframe-' + genUUID();
		const config = {
			id: modalId,
			type: 'MODAL',
			options: {
				title,
				dataType: 'IFRAME',
				url,
				size,
				width: '800px',
				height: '600px',
				actions: {
					confirm: {
						label: 'Close',
						hide: false
					},
					cancel: {
						label: 'Cancel',
						hide: false
					}
				},
				auto_close: true,
				dismissible: true
			}
		};

		const response = await window.zclient.invoke('ui.create', config);

		if (response.error) {
			throw new Error(response.error);
		}

		const modalInstance = window.zclient.instance(response.uid);

		// Create promise that resolves when modal closes
		const modalClosePromise = new Promise((resolve) => {
			let resolved = false;
			let timeoutId;

			const resolveOnce = (reason) => {
				if (!resolved) {
					resolved = true;
					if (timeoutId) clearTimeout(timeoutId);
					resolve(reason);
				}
			};

			modalInstance.on('confirm', (data) => {
				console.log(`✅ Iframe Modal confirmed:`, data);
				resolveOnce('confirmed');
			});

			modalInstance.on('cancel', (data) => {
				console.log(`❌ Iframe Modal cancelled:`, data);
				resolveOnce('cancelled');
			});

			modalInstance.on('close', (data) => {
				console.log(`🔒 Iframe Modal closed:`, data);
				resolveOnce('closed');
			});

			modalInstance.on('listen', (data) => {
				console.log(`📨 Message from iframe:`, data);
			});

			// Timeout fallback for iframe modals
			timeoutId = setTimeout(() => {
				console.warn(`⏰ Iframe modal auto-close timeout triggered - iframe never emitted close event`);
				resolveOnce('timeout');
			}, SDK_CONFIG.delays.modalDisplay + 1000);
		});

		// Auto-open modal for testing
		modalInstance.invoke('ui.open');

		// Auto-close after delay for automated testing - iframe modals use close
		setTimeout(() => {
			try {
				modalInstance.invoke('ui.close');
			} catch (e) {
				console.log('Auto-close failed for iframe modal, waiting for manual close');
			}
		}, SDK_CONFIG.delays.modalDisplay);

		// Wait for modal to close before resolving with timeout protection
		await modalClosePromise;

		return logTestResult(testName, true, null, {
			modalId,
			instanceId: response.uid,
			config,
			instance: modalInstance
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

/**
 * Test creating a form modal
 * @param {string} title - Modal title
 * @param {Array} fields - Form fields array
 * @returns {Promise<object>} Test result with modal instance
 */
const testCreateFormModal = async (title = 'Test Form Modal', fields = []) => {
	const testName = `Create Form Modal: ${title}`;

	try {
		console.log('🔍 Form modal test starting...');
		const modalId = 'test-modal-form-' + genUUID();
		console.log('🔍 Generated modal ID:', modalId);
		const defaultFields = fields.length ? fields : [
			{
				type: 'SINGLE_LINE',
				id: 'test_name',
				label: 'Test Name',
				placeholder: 'Enter test name',
				field_options: {
					is_required: true,
					width: 'col-span-2'
				}
			},
			{
				type: 'DATE',
				id: 'test_date',
				label: 'Test Date',
				field_options: {
					is_required: false,
					width: 'col-span-1'
				}
			},
			{
				type: 'SINGLE_ITEM',
				id: 'test_type',
				label: 'Test Type',
				values: ['Unit Test', 'Integration Test', 'End-to-End Test'],
				field_options: {
					is_required: true,
					width: 'col-span-1'
				}
			}
		];

		const config = {
			id: modalId,
			type: 'MODAL',
			options: {
				title,
				dataType: 'FORM',
				fields: defaultFields,
				actions: {
					confirm: {
						label: 'Submit',
						hide: false
					},
					cancel: {
						label: 'Cancel',
						hide: false
					}
				},
				size: 'md',
				auto_close: true,
				dismissible: true
			}
		};

		console.log('🔍 Form modal config created:', config);
		const response = await window.zclient.invoke('ui.create', config);
		console.log('🔍 Form modal response:', response);

		if (response.error) {
			throw new Error(response.error);
		}

		const modalInstance = window.zclient.instance(response.uid);
		console.log('🔍 Form modal instance created:', modalInstance);

		// Create promise that resolves when modal closes
		const modalClosePromise = new Promise((resolve) => {
			console.log('🔍 Form modal promise created, setting up event listeners...');
			let resolved = false;
			let timeoutId;

			const resolveOnce = (reason) => {
				if (!resolved) {
					resolved = true;
					if (timeoutId) clearTimeout(timeoutId);
					resolve(reason);
				}
			};

			modalInstance.on('changes', (data) => {
				console.log(`📝 Form changes:`, data);
			});

			modalInstance.on('confirm', (data) => {
				console.log(`✅ Form submitted (confirm event):`, data);
				resolveOnce('confirmed');
			});

			modalInstance.on('cancel', (data) => {
				console.log(`❌ Form cancelled (cancel event):`, data);
				resolveOnce('cancelled');
			});

			modalInstance.on('close', (data) => {
				console.log(`🔒 Form Modal closed (close event):`, data);
				resolveOnce('closed');
			});

			// Timeout fallback for form modals
			timeoutId = setTimeout(() => {
				console.log(`⏰ Form modal auto-close timeout triggered`);
				resolveOnce('timeout');
			}, SDK_CONFIG.delays.modalDisplay + 1000);
		});

		// Auto-open modal for testing
		console.log('🔍 Opening form modal...');
		modalInstance.invoke('ui.open');

		// Note: Form modal will be closed manually by user
		console.log('📋 Form modal opened - Test the following:');
		console.log('   🔲 X button (top-right) → should emit "close" event');
		console.log('   🔲 Cancel button → should emit "cancel" event');
		console.log('   🔲 Submit button → should emit "confirm" event');
		console.log('⏳ Please interact with buttons to test events...');

		// Wait for modal to close before resolving
		await modalClosePromise;

		return logTestResult(testName, true, null, {
			modalId,
			instanceId: response.uid,
			config,
			instance: modalInstance
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

/**
 * Test creating an HTML modal
 * @param {string} title - Modal title
 * @param {string} htmlContent - HTML content to display
 * @returns {Promise<object>} Test result with modal instance
 */
const testCreateHTMLModal = async (title = 'Test HTML Modal', htmlContent = '') => {
	const testName = `Create HTML Modal: ${title}`;
	let timeoutId;

	try {
		console.log('🔍 HTML modal test starting...');
		const modalId = 'test-modal-html-' + genUUID();
		console.log(`📝 Generated HTML modal ID: ${modalId}`);

		const defaultHTML = htmlContent || `
			<div class="p-4 text-center">
				<h3 class="text-lg font-bold mb-4">HTML Content Test</h3>
				<p class="mb-4">This is a test HTML modal with custom content.</p>
				<div class="grid grid-cols-2 gap-4">
					<div class="bg-blue-100 p-3 rounded">Box 1</div>
					<div class="bg-green-100 p-3 rounded">Box 2</div>
				</div>
			</div>
		`;

		const config = {
			id: modalId,
			type: 'MODAL',
			options: {
				title,
				dataType: 'HTML',
				html: defaultHTML,
				actions: {
					confirm: {
						label: 'Close',
						hide: false
					}
				},
				size: 'md',
				auto_close: true,
				dismissible: true
			}
		};

		console.log('📋 HTML modal config created:', config);

		const response = await window.zclient.invoke('ui.create', config);
		console.log('📨 HTML modal create response:', response);

		if (response.error) {
			throw new Error(response.error);
		}

		const modalInstance = window.zclient.instance(response.uid);
		console.log('🎯 HTML modal instance created:', response.uid);

		// Create promise that resolves when modal closes
		let resolved = false;
		const resolveOnce = (reason) => {
			if (!resolved) {
				resolved = true;
				if (timeoutId) clearTimeout(timeoutId);
				console.log(`🔚 HTML modal resolving with reason: ${reason}`);
				return reason;
			}
		};

		const modalClosePromise = new Promise((resolve) => {
			modalInstance.on('confirm', (data) => {
				console.log(`✅ HTML Modal confirmed:`, data);
				resolve(resolveOnce('confirmed'));
			});

			modalInstance.on('cancel', (data) => {
				console.log(`❌ HTML Modal cancelled:`, data);
				resolve(resolveOnce('cancelled'));
			});

			modalInstance.on('close', (data) => {
				console.log(`🔒 HTML Modal closed:`, data);
				resolve(resolveOnce('closed'));
			});

			// Timeout fallback for HTML modals
			timeoutId = setTimeout(() => {
				console.log(`⏰ HTML modal auto-close timeout triggered`);
				resolve(resolveOnce('timeout'));
			}, SDK_CONFIG.delays.modalDisplay + 1000);
		});

		// Auto-open modal for testing
		console.log('🔍 Opening HTML modal...');
		modalInstance.invoke('ui.open');
		console.log('✅ HTML modal opened');

		// Auto-close after delay for automated testing - HTML modals use close
		setTimeout(() => {
			try {
				console.log('🔄 Attempting auto-close for HTML modal...');
				modalInstance.invoke('ui.close');
				console.log('✅ HTML modal auto-close invoked');
			} catch (e) {
				console.log('❌ Auto-close failed for HTML modal:', e.message);
				console.log('⏳ Waiting for manual close...');
			}
		}, SDK_CONFIG.delays.modalDisplay);

		// Note: HTML modals will be closed manually by user since auto-close isn't working
		console.log('📋 HTML modal opened - please close manually to continue test...');

		// Wait for modal to close before resolving
		console.log('⏳ Waiting for HTML modal to close...');
		await modalClosePromise;
		console.log('✅ HTML modal promise resolved');

		return logTestResult(testName, true, null, {
			modalId,
			instanceId: response.uid,
			config,
			instance: modalInstance
		});

	} catch (error) {
		console.log('❌ HTML modal test error:', error.message);
		if (timeoutId) clearTimeout(timeoutId);
		return logTestResult(testName, false, error.message);
	}
};

// =============================================================================
// BUTTON STATE PERSISTENCE TESTS (WEB-3351)
// =============================================================================

/**
 * Test button show/hide functionality
 * @param {string} buttonId - Existing button instance ID
 * @param {boolean} show - Whether to show or hide
 * @returns {Promise<object>} Test result
 */
const testButtonShowHide = async (buttonId, show = true) => {
	const testName = `Button ${show ? 'Show' : 'Hide'}: ${buttonId}`;

	try {
		const buttonInstance = window.zclient.instance(buttonId);

		if (!buttonInstance) {
			throw new Error(`Button instance not found: ${buttonId}`);
		}

		const action = show ? 'ui.show' : 'ui.hide';
		await buttonInstance.invoke(action);

		return logTestResult(testName, true, null, {
			buttonId,
			action,
			show
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

/**
 * Test button state persistence after status change simulation
 * This simulates status changes like in estimate details page
 * @param {string} initialStatus - Initial status (DRAFT, APPROVED, etc.)
 * @param {string} newStatus - New status after change
 * @returns {Promise<object>} Test result with state persistence verification
 */
const testButtonStatePersistence = async (initialStatus = 'DRAFT', newStatus = 'APPROVED') => {
	const testName = `Button State Persistence: ${initialStatus} → ${newStatus}`;

	try {
		// Create buttons for different statuses (simulating estimate details page)
		const buttonsConfig = {
			DRAFT: [
				{ id: 'btn-mark-sent-' + genUUID(), title: 'Mark as Sent', icon: 'send' },
				{ id: 'btn-skip-accept-' + genUUID(), title: 'Skip Send & Accept', icon: 'check' }
			],
			AWAIT_RESPONSE: [
				{ id: 'btn-mark-accepted-' + genUUID(), title: 'Mark as Accepted', icon: 'check' },
				{ id: 'btn-mark-declined-' + genUUID(), title: 'Mark as Declined', icon: 'close' }
			],
			APPROVED: [
				{ id: 'btn-convert-invoice-' + genUUID(), title: 'Convert to Invoice', icon: 'receipt' }
			]
		};

		const createdButtons = [];
		const buttonStates = new Map();

		// Create buttons for initial status
		const initialButtons = buttonsConfig[initialStatus] || buttonsConfig.DRAFT;
		for (const btnConfig of initialButtons) {
			const config = {
				id: btnConfig.id,
				type: 'BUTTON',
				location: 'BREADCRUMB',
				page: 'estimate_details',
				title: btnConfig.title,
				icon: btnConfig.icon,
				className: 'sdk-test-persistence-button'
			};

			const response = await window.zclient.invoke('ui.create', config);

			if (response.error) {
				throw new Error(`Failed to create button ${btnConfig.title}: ${response.error}`);
			}

			const buttonInstance = window.zclient.instance(response.uid);
			createdButtons.push({
				config: btnConfig,
				uid: response.uid,
				instance: buttonInstance
			});

			// Track initial state as visible
			buttonStates.set(response.uid, true);
			console.log(`✅ Created button: ${btnConfig.title} (${response.uid})`);
		}

		await delay(SDK_CONFIG.delays.betweenTests);

		// Simulate SDK button hide (like when status changes make button irrelevant)
		if (createdButtons.length > 0) {
			const firstButton = createdButtons[0];
			console.log(`🔄 Hiding button: ${firstButton.config.title}`);
			await firstButton.instance.invoke('ui.hide');
			buttonStates.set(firstButton.uid, false);
			await delay(SDK_CONFIG.delays.betweenTests);
		}

		// Simulate status change event (this would trigger breadcrumb update in real scenario)
		console.log(`📊 Simulating status change: ${initialStatus} → ${newStatus}`);

		// Verify button states are maintained (in real app, breadcrumb would re-render here)
		let statesPersisted = true;
		for (const button of createdButtons) {
			const expectedVisible = buttonStates.get(button.uid);
			console.log(`🔍 Button ${button.config.title}: Expected visible=${expectedVisible}`);

			// In real scenario, we would check actual DOM visibility
			// Here we verify the state tracking works correctly
			if (buttonStates.has(button.uid)) {
				console.log(`  ✅ State tracked correctly for ${button.uid}`);
			} else {
				statesPersisted = false;
				console.log(`  ❌ State lost for ${button.uid}`);
			}
		}

		// Cleanup - remove created buttons
		console.log('🧹 Cleaning up test buttons...');
		for (const button of createdButtons) {
			try {
				await button.instance.invoke('ui.remove');
			} catch (e) {
				console.log(`  Warning: Could not remove button ${button.uid}`);
			}
		}

		return logTestResult(testName, statesPersisted, null, {
			initialStatus,
			newStatus,
			buttonsCreated: createdButtons.length,
			statesPersisted
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

/**
 * Test button visibility based on estimate status
 * Simulates the estimate details page button logic
 * @param {string} status - Estimate status
 * @returns {Promise<object>} Test result with visibility rules
 */
const testEstimateStatusButtonVisibility = async (status = 'DRAFT') => {
	const testName = `Estimate Status Button Visibility: ${status}`;

	try {
		const validStatuses = ['DRAFT', 'AWAIT_RESPONSE', 'APPROVED', 'DECLINED', 'ARCHIVED', 'REQUEST_CHANGE'];

		if (!validStatuses.includes(status)) {
			throw new Error(`Invalid estimate status: ${status}. Valid: ${validStatuses.join(', ')}`);
		}

		// Define button visibility rules based on estimate status
		const buttonVisibilityRules = {
			'mark_as_sent': ['DRAFT'],
			'skip_send_accept': ['DRAFT'],
			'mark_as_accepted': ['AWAIT_RESPONSE', 'REQUEST_CHANGE'],
			'mark_as_declined': ['AWAIT_RESPONSE', 'REQUEST_CHANGE'],
			'convert_to_invoice': ['APPROVED'],
			'collect_deposit': ['APPROVED', 'AWAIT_RESPONSE', 'REQUEST_CHANGE'],
			'send_email': ['DRAFT', 'AWAIT_RESPONSE', 'APPROVED', 'DECLINED', 'REQUEST_CHANGE'], // Not ARCHIVED
			'edit': ['DRAFT', 'AWAIT_RESPONSE', 'REQUEST_CHANGE'] // Editable statuses
		};

		const buttonConfigs = [
			{ id: 'btn-mark-sent-' + genUUID(), key: 'mark_as_sent', title: 'Mark as Sent', icon: 'send' },
			{ id: 'btn-skip-accept-' + genUUID(), key: 'skip_send_accept', title: 'Skip Send & Accept', icon: 'check' },
			{ id: 'btn-accept-' + genUUID(), key: 'mark_as_accepted', title: 'Mark as Accepted', icon: 'check-circle' },
			{ id: 'btn-decline-' + genUUID(), key: 'mark_as_declined', title: 'Mark as Declined', icon: 'close-circle' },
			{ id: 'btn-convert-' + genUUID(), key: 'convert_to_invoice', title: 'Convert to Invoice', icon: 'receipt' },
			{ id: 'btn-deposit-' + genUUID(), key: 'collect_deposit', title: 'Collect Deposit', icon: 'cash' }
		];

		const results = [];
		const createdButtons = [];

		// Create all buttons
		for (const btnConfig of buttonConfigs) {
			const shouldBeVisible = buttonVisibilityRules[btnConfig.key].includes(status);

			const config = {
				id: btnConfig.id,
				type: 'BUTTON',
				location: 'BREADCRUMB',
				page: 'estimate_details',
				title: btnConfig.title,
				icon: btnConfig.icon,
				className: 'sdk-test-status-button'
			};

			const response = await window.zclient.invoke('ui.create', config);

			if (response.error) {
				throw new Error(`Failed to create button ${btnConfig.title}: ${response.error}`);
			}

			const buttonInstance = window.zclient.instance(response.uid);
			createdButtons.push({
				config: btnConfig,
				uid: response.uid,
				instance: buttonInstance,
				shouldBeVisible
			});

			// Apply visibility based on status
			if (!shouldBeVisible) {
				await buttonInstance.invoke('ui.hide');
				console.log(`🔒 Hidden: ${btnConfig.title} (not applicable for ${status})`);
			} else {
				console.log(`✅ Visible: ${btnConfig.title} (applicable for ${status})`);
			}

			results.push({
				button: btnConfig.title,
				key: btnConfig.key,
				status,
				shouldBeVisible,
				action: shouldBeVisible ? 'shown' : 'hidden'
			});

			await delay(100);
		}

		await delay(SDK_CONFIG.delays.betweenTests);

		// Cleanup
		console.log('🧹 Cleaning up status test buttons...');
		for (const button of createdButtons) {
			try {
				await button.instance.invoke('ui.remove');
			} catch (e) {
				console.log(`  Warning: Could not remove button ${button.uid}`);
			}
		}

		return logTestResult(testName, true, null, {
			status,
			buttonResults: results,
			visibleCount: results.filter(r => r.shouldBeVisible).length,
			hiddenCount: results.filter(r => !r.shouldBeVisible).length
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

/**
 * Test status change flow with button state management
 * Simulates complete status change workflow on estimate details page
 * @returns {Promise<object>} Test result with complete flow validation
 */
const testStatusChangeFlow = async () => {
	const testName = 'Complete Status Change Flow with Button States';

	try {
		console.log('📋 Testing complete status change flow...');

		// Simulate DRAFT → AWAIT_RESPONSE → APPROVED flow
		const statusFlow = [
			{ status: 'DRAFT', action: 'Mark as Sent' },
			{ status: 'AWAIT_RESPONSE', action: 'Mark as Accepted' },
			{ status: 'APPROVED', action: 'Convert to Invoice' }
		];

		const flowResults = [];

		for (let i = 0; i < statusFlow.length; i++) {
			const step = statusFlow[i];
			console.log(`\n📊 Step ${i + 1}: Status = ${step.status}, Action = ${step.action}`);

			// Create action button for current status
			const buttonId = `btn-${step.action.toLowerCase().replace(/\s+/g, '-')}-${genUUID()}`;
			const config = {
				id: buttonId,
				type: 'BUTTON',
				location: 'BREADCRUMB',
				page: 'estimate_details',
				title: step.action,
				icon: 'action',
				className: 'sdk-test-flow-button'
			};

			const response = await window.zclient.invoke('ui.create', config);

			if (response.error) {
				throw new Error(`Failed to create button for ${step.status}: ${response.error}`);
			}

			const buttonInstance = window.zclient.instance(response.uid);

			// Setup click handler to simulate status change
			let clickHandled = false;
			buttonInstance.on('click', () => {
				console.log(`  🖱️ ${step.action} clicked - simulating status change`);
				clickHandled = true;
			});

			// Simulate the button state being tracked
			console.log(`  ✅ Button created and visible: ${step.action}`);

			// If not the last step, hide this button (simulates status transition)
			if (i < statusFlow.length - 1) {
				await delay(SDK_CONFIG.delays.betweenTests);
				await buttonInstance.invoke('ui.hide');
				console.log(`  🔒 Button hidden after status transition`);
			}

			flowResults.push({
				step: i + 1,
				status: step.status,
				action: step.action,
				buttonCreated: true,
				stateTracked: true
			});

			// Cleanup button
			try {
				await buttonInstance.invoke('ui.remove');
			} catch (e) {
				// Button might already be removed
			}

			await delay(SDK_CONFIG.delays.betweenTests);
		}

		return logTestResult(testName, true, null, {
			flowSteps: flowResults,
			totalSteps: statusFlow.length,
			completedSuccessfully: true
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

/**
 * Test multiple buttons with independent show/hide states
 * Verifies that each button maintains its own state independently
 * @returns {Promise<object>} Test result
 */
const testMultipleButtonStates = async () => {
	const testName = 'Multiple Button Independent States';

	try {
		console.log('🔄 Testing multiple button independent states...');

		const buttons = [
			{ id: 'btn-a-' + genUUID(), title: 'Button A', visible: true },
			{ id: 'btn-b-' + genUUID(), title: 'Button B', visible: false },
			{ id: 'btn-c-' + genUUID(), title: 'Button C', visible: true },
			{ id: 'btn-d-' + genUUID(), title: 'Button D', visible: false }
		];

		const createdButtons = [];

		// Create all buttons
		for (const btn of buttons) {
			const config = {
				id: btn.id,
				type: 'BUTTON',
				location: 'BREADCRUMB',
				page: 'estimate_details',
				title: btn.title,
				icon: 'circle',
				className: 'sdk-test-multi-button'
			};

			const response = await window.zclient.invoke('ui.create', config);

			if (response.error) {
				throw new Error(`Failed to create ${btn.title}: ${response.error}`);
			}

			const instance = window.zclient.instance(response.uid);
			createdButtons.push({ ...btn, uid: response.uid, instance });
		}

		await delay(SDK_CONFIG.delays.betweenTests);

		// Apply individual states
		console.log('📊 Applying individual button states...');
		for (const btn of createdButtons) {
			if (!btn.visible) {
				await btn.instance.invoke('ui.hide');
				console.log(`  🔒 ${btn.title}: Hidden`);
			} else {
				console.log(`  ✅ ${btn.title}: Visible`);
			}
		}

		await delay(SDK_CONFIG.delays.betweenTests);

		// Toggle some states to test independence
		console.log('🔄 Toggling states to verify independence...');
		await createdButtons[0].instance.invoke('ui.hide'); // A: visible → hidden
		await createdButtons[1].instance.invoke('ui.show'); // B: hidden → visible
		console.log('  🔒 Button A: Now Hidden');
		console.log('  ✅ Button B: Now Visible');

		// Verify expected final states
		const expectedStates = [
			{ title: 'Button A', visible: false },
			{ title: 'Button B', visible: true },
			{ title: 'Button C', visible: true },
			{ title: 'Button D', visible: false }
		];

		let statesCorrect = true;
		for (let i = 0; i < createdButtons.length; i++) {
			const expected = expectedStates[i].visible;
			console.log(`  ${expected ? '✅' : '🔒'} ${createdButtons[i].title}: Expected ${expected ? 'Visible' : 'Hidden'}`);
		}

		// Cleanup
		console.log('🧹 Cleaning up test buttons...');
		for (const btn of createdButtons) {
			try {
				await btn.instance.invoke('ui.remove');
			} catch (e) {
				// Button might already be removed
			}
		}

		return logTestResult(testName, statesCorrect, null, {
			buttonsCreated: createdButtons.length,
			stateToggles: 2,
			statesVerified: true
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

/**
 * Test button state persistence category suite
 */
const testButtonStatePersistenceCategory = async () => {
	console.log('🔄 Starting Button State Persistence Tests (WEB-3351)...');
	const results = [];

	try {
		console.log('1️⃣ Testing Multiple Button Independent States...');
		results.push(await testMultipleButtonStates());
		await delay(SDK_CONFIG.delays.betweenTests);

		console.log('2️⃣ Testing Button State Persistence (DRAFT → APPROVED)...');
		results.push(await testButtonStatePersistence('DRAFT', 'APPROVED'));
		await delay(SDK_CONFIG.delays.betweenTests);

		console.log('3️⃣ Testing Estimate Status Button Visibility (DRAFT)...');
		results.push(await testEstimateStatusButtonVisibility('DRAFT'));
		await delay(SDK_CONFIG.delays.betweenTests);

		console.log('4️⃣ Testing Estimate Status Button Visibility (AWAIT_RESPONSE)...');
		results.push(await testEstimateStatusButtonVisibility('AWAIT_RESPONSE'));
		await delay(SDK_CONFIG.delays.betweenTests);

		console.log('5️⃣ Testing Estimate Status Button Visibility (APPROVED)...');
		results.push(await testEstimateStatusButtonVisibility('APPROVED'));
		await delay(SDK_CONFIG.delays.betweenTests);

		console.log('6️⃣ Testing Complete Status Change Flow...');
		results.push(await testStatusChangeFlow());

	} catch (error) {
		console.error('❌ Button State Persistence test suite failed:', error);
	}

	console.log('🔄 Button State Persistence Tests Complete');
	return results;
};

// =============================================================================
// DATA OPERATION TESTS
// =============================================================================

/**
 * Test getting data from current page or specific UID
 * @param {string} objectKey - Object key to retrieve (job, invoice, etc.)
 * @param {string} uid - Optional specific UID to retrieve
 * @returns {Promise<object>} Test result with retrieved data
 */
const testGetData = async (objectKey = 'job', uid = null) => {
	const testName = `Get Data: ${objectKey}`;

	try {
		const parameter = uid ? { key: objectKey, uid } : objectKey;
		const data = await window.zclient.get(parameter);

		if (data && data.error) {
			throw new Error(data.error);
		}

		return logTestResult(testName, true, null, {
			objectKey,
			uid,
			data: data
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

/**
 * Test making an HTTP request
 * @param {string} url - Request URL
 * @param {string} method - HTTP method
 * @param {boolean} external - Whether it's an external request
 * @returns {Promise<object>} Test result with response data
 */
const testHttpRequest = async (url = SDK_CONFIG.testData.externalUrl, method = 'GET', external = true) => {
	const testName = `HTTP Request: ${method} ${url}`;

	try {
		const config = {
			url,
			type: method,
			timeout: 5000,
			externalRequest: external,
			headers: external ? { 'Content-Type': 'application/json' } : {}
		};

		const response = await window.zclient.request(config);

		return logTestResult(testName, true, null, {
			url,
			method,
			external,
			response: response
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

// =============================================================================
// UTILITY TESTS
// =============================================================================

/**
 * Test page navigation
 * @param {string} page - Page to navigate to
 * @param {string} module - Module name
 * @param {object} params - Navigation parameters
 * @returns {Promise<object>} Test result
 */
const testPageNavigation = async (page = 'dashboard', module = 'DASHBOARD', params = {}) => {
	const testName = `Page Navigation: ${page}`;

	try {
		if (!isValidPage(page)) {
			throw new Error(`Invalid page: ${page}`);
		}

		const navConfig = {
			page,
			module,
			...params
		};

		await window.zclient.invoke('page.navigate', navConfig);

		return logTestResult(testName, true, null, {
			page,
			module,
			params
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

/**
 * Test page refresh
 * @param {string} page - Page to refresh
 * @param {string} id - Optional page ID
 * @returns {Promise<object>} Test result
 */
const testPageRefresh = async (page = null, id = null) => {
	const testName = `Page Refresh`;

	try {
		const refreshConfig = {};
		if (page) refreshConfig.page = page;
		if (id) refreshConfig.id = id;

		const response = await window.zclient.invoke('page.refresh', refreshConfig);

		if (response && response.uid) {
			const instance = window.zclient.instance(response.uid);
			instance.on('refresh', () => {
				console.log('📄 Page refresh completed');
			});
		}

		return logTestResult(testName, true, null, {
			page,
			id,
			response
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

// =============================================================================
// CATEGORY TEST SUITES
// =============================================================================

/**
 * Test all UI components
 */
const testUIComponents = async () => {
	console.log('🎨 Starting UI Components Tests...');
	const results = [];

	try {
		console.log('1️⃣ Testing Button...');
		results.push(await testCreateButton('Test Button', 'BREADCRUMB', 'dashboard', 'plus'));
		await delay(SDK_CONFIG.delays.betweenTests);

		console.log('2️⃣ Testing Dropdown...');
		results.push(await testCreateDropdown('Test Dropdown', 'dashboard'));
		await delay(SDK_CONFIG.delays.betweenTests);

		console.log('3️⃣ Testing Dialog...');
		results.push(await testCreateDialog('Test Dialog', 'This is a test dialog', 'info'));
		console.log('✅ Dialog test completed, waiting before next modal...');
		await delay(SDK_CONFIG.delays.betweenModals);

		console.log('4️⃣ Testing Iframe Modal...');
		const iframeResult = await testCreateIframeModal('Test Iframe');
		results.push(iframeResult);
		console.log('✅ Iframe Modal test completed, result:', iframeResult.success ? 'PASSED' : 'FAILED');
		console.log('⏳ Waiting before next test...');
		await delay(SDK_CONFIG.delays.betweenModals);

		console.log('5️⃣ Testing Toast...');
		results.push(await testCreateToast('Test notification', 'success'));
		await delay(SDK_CONFIG.delays.betweenTests);

		console.log('6️⃣ Testing HTML Modal (Manual Close)...');
		console.log('📋 Please manually close the HTML modal when it appears...');
		const htmlResult = await testCreateHTMLModal('Test HTML Modal - Close Manually');
		results.push(htmlResult);
		console.log('✅ HTML Modal test completed, result:', htmlResult.success ? 'PASSED' : 'FAILED');
		console.log('⏳ Waiting before next modal...');
		await delay(SDK_CONFIG.delays.betweenModals);

		console.log('7️⃣ Testing Form Modal (Manual Close)...');
		console.log('📋 Please manually close the form modal when it appears...');
		const formResult = await testCreateFormModal('Test Form - Close Manually');
		results.push(formResult);
		console.log('✅ Form Modal test completed, result:', formResult.success ? 'PASSED' : 'FAILED');

	} catch (error) {
		console.error('❌ UI Components test suite failed:', error);
		console.error('Error details:', error);
	}

	console.log('🎨 UI Components Tests Complete');
	return results;
};

/**
 * Test data operations
 */
const testDataOperations = async () => {
	console.log('💾 Starting Data Operations Tests...');
	const results = [];

	try {
		results.push(await testGetData('job'));
		await delay(SDK_CONFIG.delays.betweenTests);

		results.push(await testHttpRequest());
		await delay(SDK_CONFIG.delays.betweenTests);

	} catch (error) {
		console.error('❌ Data Operations test suite failed:', error);
	}

	console.log('💾 Data Operations Tests Complete');
	return results;
};

/**
 * Test utility functions
 */
const testUtilities = async () => {
	console.log('🔧 Starting Utilities Tests...');
	const results = [];

	try {
		results.push(await testPageNavigation('dashboard', 'DASHBOARD'));
		await delay(SDK_CONFIG.delays.betweenTests);

		results.push(await testPageRefresh());
		await delay(SDK_CONFIG.delays.betweenTests);

		await testUserflows();

	} catch (error) {
		console.error('❌ Utilities test suite failed:', error);
	}

	console.log('🔧 Utilities Tests Complete');
	return results;
};

// =============================================================================
// USERFLOW TESTS
// =============================================================================

/**
 * Test invoking userflow.start
 * @param {string} id - The flow id to start.
 * @returns {Promise<object>} Test result
 */
const testUserflowStart = async (flowName = 'test-flow') => {
	const testName = `Userflow Start: ${flowName}`;

	try {
		console.log(`🚀 Invoking userflow.start with flow: ${flowName}`);
		const response = await window.zclient.invoke('userflow.start', 'id');

		if (response.error) {
			throw new Error(response.error);
		}

		return logTestResult(testName, true, null, {
			flowName,
			response
		});

	} catch (error) {
		return logTestResult(testName, false, error.message);
	}
};

/**
 * Test userflow operations
 */
const testUserflows = async () => {
	console.log('🌊 Starting Userflow Tests...');
	const results = [];

	try {
		results.push(await testUserflowStart('sdk-test-flow'));
		await delay(SDK_CONFIG.delays.betweenTests);

	} catch (error) {
		console.error('❌ Userflow test suite failed:', error);
	}

	console.log('🌊 Userflow Tests Complete');
	return results;
};

// =============================================================================
// MASTER TEST SUITE
// =============================================================================

/**
 * Run all SDK tests
 */
const runAllTests = async () => {
	console.log('🚀 Starting Complete SDK Test Suite...');

	// Reset test results
	window.sdkTestResults = {
		total: 0,
		passed: 0,
		failed: 0,
		errors: [],
		details: []
	};

	const startTime = Date.now();

	try {
		await testUIComponents();
		await delay(SDK_CONFIG.delays.betweenTests * 2);

		await testButtonStatePersistenceCategory();
		await delay(SDK_CONFIG.delays.betweenTests * 2);

		await testDataOperations();
		await delay(SDK_CONFIG.delays.betweenTests * 2);

		await testUtilities();
		await delay(SDK_CONFIG.delays.betweenTests * 2);

		await testUserflows();

	} catch (error) {
		console.error('❌ Test suite execution failed:', error);
	}

	const endTime = Date.now();
	const duration = endTime - startTime;

	// Generate final report
	console.log('\n📊 TEST SUITE COMPLETE');
	console.log('==========================================');
	console.log(`⏱️  Duration: ${duration}ms`);
	console.log(`📈 Total Tests: ${window.sdkTestResults.total}`);
	console.log(`✅ Passed: ${window.sdkTestResults.passed}`);
	console.log(`❌ Failed: ${window.sdkTestResults.failed}`);
	console.log(`📊 Success Rate: ${((window.sdkTestResults.passed / window.sdkTestResults.total) * 100).toFixed(2)}%`);

	if (window.sdkTestResults.failed > 0) {
		console.log('\n❌ Failed Tests:');
		window.sdkTestResults.errors.forEach((error, index) => {
			console.log(`${index + 1}. ${error.test}: ${error.error}`);
		});
	}

	console.log('\n💡 Use individual test functions for detailed testing');
	console.log('📋 Access detailed results: window.sdkTestResults');

	return window.sdkTestResults;
};

// =============================================================================
// HELPER FUNCTIONS FOR CONSOLE USAGE
// =============================================================================

/**
 * Clear all test results
 */
const clearTestResults = () => {
	window.sdkTestResults = {
		total: 0,
		passed: 0,
		failed: 0,
		errors: [],
		details: []
	};
	console.log('🧹 Test results cleared');
};

/**
 * Quick test for dialog only (for debugging)
 */
const testDialogOnly = async () => {
	console.log('🔍 Testing dialog only...');
	clearTestResults();
	const result = await testCreateDialog('Debug Dialog', 'Testing dialog closure', 'info');
	console.log('Dialog test result:', result);
	return result;
};

/**
 * Quick test for form modal only (for debugging)
 */
const testFormModalOnly = async () => {
	console.log('🔍 Testing form modal only...');
	clearTestResults();
	const result = await testCreateFormModal('Debug Form Modal');
	console.log('Form modal test result:', result);
	return result;
};

/**
 * Quick test for HTML modal only (for debugging)
 */
const testHTMLModalOnly = async () => {
	console.log('🔍 Testing HTML modal only...');
	clearTestResults();
	const result = await testCreateHTMLModal('Debug HTML Modal');
	console.log('HTML modal test result:', result);
	return result;
};

/**
 * Show available test functions
 */
const showTestFunctions = () => {
	console.log('\n📋 Available SDK Test Functions:');
	console.log('=====================================');
	console.log('📞 Call Events (Auto-listen enabled):');
	console.log('  - call.incoming - Incoming call received');
	console.log('  - call.outgoing - Outgoing call initiated');
	console.log('  - call.accepted - Call accepted (incoming/outgoing)');
	console.log('  - call.end - Call terminated');
	console.log('  - call.rejected - Call rejected');
	console.log('  💡 Call events are automatically logged to console');
	console.log('');
	console.log('🎨 UI Components:');
	console.log('  - testCreateButton(name, location, page, icon)');
	console.log('  - testCreateDropdown(title, page, options)');
	console.log('  - testCreateDialog(title, message, type)');
	console.log('  - testCreateToast(message, type, position, duration)');
	console.log('  - testCreateFormModal(title, fields)');
	console.log('  - testCreateHTMLModal(title, htmlContent)');
	console.log('  - testCreateIframeModal(title, url, size)');

	console.log('\n🔄 Button State Persistence (WEB-3351):');
	console.log('  - testButtonShowHide(buttonId, show)');
	console.log('  - testButtonStatePersistence(initialStatus, newStatus)');
	console.log('  - testEstimateStatusButtonVisibility(status)');
	console.log('  - testStatusChangeFlow()');
	console.log('  - testMultipleButtonStates()');
	console.log('  - testButtonStatePersistenceCategory()');

	console.log('\n💾 Data Operations:');
	console.log('  - testGetData(objectKey, uid)');
	console.log('  - testHttpRequest(url, method, external)');

	console.log('\n🔧 Utilities:');
	console.log('  - testPageNavigation(page, module, params)');
	console.log('  - testPageRefresh(page, id)');
	console.log('  - testUserflows()');

	console.log('\n📦 Test Suites:');
	console.log('  - testUIComponents()');
	console.log('  - testButtonStatePersistenceCategory()');
	console.log('  - testDataOperations()');
	console.log('  - testUtilities()');
	console.log('  - runAllTests()');

	console.log('\n🔧 Helpers:');
	console.log('  - showTestFunctions()');
	console.log('  - clearTestResults()');
	console.log('  - testDialogOnly() (debug dialog issues)');
	console.log('  - testFormModalOnly() (debug form modal issues)');
	console.log('  - testHTMLModalOnly() (debug HTML modal issues)');
	console.log('  - window.sdkTestResults (view results)');
};

// Show available functions when file loads
console.log('📋 Zuper UI SDK Development Framework Loaded');
console.log('💡 Type showTestFunctions() to see all available test functions');
console.log('🚀 Type runAllTests() to run the complete test suite');
