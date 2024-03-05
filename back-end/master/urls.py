from django.urls import path
from master.views.catgeory_views import CategorysViews, CategoryView
from master.views.portfolio_views import WorkPortfoliosViews, WorkPortfolioViews, WorkImageView
from master.views.master_views import WorkMastersViews, WorkMasterViews


urlpatterns = [
    path('categories', CategorysViews.as_view(), name='categories'),
    path('category/<int:pk>', CategoryView.as_view(), name='category'),
    path('work/porfolios', WorkPortfoliosViews.as_view(), name='work portfolios'),
    path('work/portfolio/<int:pk>', WorkPortfolioViews.as_view(), name='work portfolio'),
    path('work/image/<int:pk>', WorkImageView.as_view()),
    path('work/masters', WorkMastersViews.as_view(), name='work master'),
    path('work/master/<int:pk>', WorkMasterViews.as_view(), name='work master'),

]
