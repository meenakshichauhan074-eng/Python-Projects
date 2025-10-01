from django import template

register = template.Library()

@register.filter(name='cut')
def cut(value,arg):
    """
     This cuts out all values of "arg" from the string!
    """

    return value.replace(arg,'')

# register.filter('cut',cut) This is one method to register filter but another method is use of decorators