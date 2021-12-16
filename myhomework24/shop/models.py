from django.core.validators import RegexValidator
from django.db import models


class TimestampedModels(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Category(TimestampedModels):
    name = models.CharField(max_length=20, unique=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name



class Post(TimestampedModels):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, db_index=True)
    content = models.TextField()
    photo = models.ImageField(upload_to='shop/post/%y/%m/%d')
    telephone = models.CharField(max_length=14,
                                 validators=[
                                RegexValidator(r"^\d{0,4}-?\d{3,4}-?\d{4}$")
                                 ])
    gender = models.CharField(
        max_length=1,
    choices=[
        ('M', '남자'),
        ('F', '여자'),
        ('N', '기타')],
        db_index=True,
        default='N',
    )
    tag_set = models.ManyToManyField('Tag', blank=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.title

class Review(TimestampedModels):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    author_name = models.CharField(max_length=100)
    message = models.TextField()

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.author_name


class Tag(TimestampedModels):
    name = models.CharField(max_length=20, unique=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name