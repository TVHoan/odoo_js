# -*- coding: utf-8 -*-
# from odoo import http


# class Test-js(http.Controller):
#     @http.route('/test-js/test-js/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/test-js/test-js/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('test-js.listing', {
#             'root': '/test-js/test-js',
#             'objects': http.request.env['test-js.test-js'].search([]),
#         })

#     @http.route('/test-js/test-js/objects/<model("test-js.test-js"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('test-js.object', {
#             'object': obj
#         })
