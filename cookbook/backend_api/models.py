from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Recipe(models.Model):
    title = models.CharField(max_length=128, unique=True)
    content = models.TextField()
    category = models.ForeignKey(Category, related_name='recipes', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Рецепт'
        verbose_name_plural = 'Рецепты'
