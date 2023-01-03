'use strict';

/**
 * dzongkhag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dzongkhag.dzongkhag');
