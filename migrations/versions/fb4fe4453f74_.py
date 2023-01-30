"""empty message

Revision ID: fb4fe4453f74
Revises: 0e32505c4f1f
Create Date: 2023-01-29 20:02:43.575281

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fb4fe4453f74'
down_revision = '0e32505c4f1f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('categorias', schema=None) as batch_op:
        batch_op.add_column(sa.Column('img', sa.String(length=200), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('categorias', schema=None) as batch_op:
        batch_op.drop_column('img')

    # ### end Alembic commands ###