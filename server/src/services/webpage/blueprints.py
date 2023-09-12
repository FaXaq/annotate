from flask import Blueprint

bp = Blueprint('/webpage', __name__, url_prefix='/webpage')

@bp.route('/', methods=('GET', 'POST'))
def index():
    return { 'list': "test" }
