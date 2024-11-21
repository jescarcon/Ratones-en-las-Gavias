from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator

class Game(models.Model):
    DIFFICULTY_CHOICES = [
        ('Principiante', 'Principiante'),
        ('Intermedio', 'Intermedio'),
        ('Avanzado', 'Avanzado'),
    ]

    MODE_CHOICES = [
        ('Presencial en Mesa', 'Presencial en Mesa'),
        ('Rol en Vivo', 'Rol en Vivo'),
        ('Online', 'Online'),
    ]

    STATUS_CHOICES = [
        ('Por Iniciar', 'Por Iniciar'),
        ('En Curso', 'En Curso'),
        ('Finalizado', 'Finalizado'),
    ]
        
    name = models.CharField(max_length=255)
    system = models.CharField(max_length=255)
    genre = models.CharField(max_length=255)
    duration = models.CharField(max_length=50)
    difficulty = models.CharField(max_length=50, choices=DIFFICULTY_CHOICES)
    players = models.IntegerField( validators=[MinValueValidator(1)],        help_text="Número de jugadores (debe ser mayor que 0)")
    game_mode = models.CharField(max_length=50, choices=MODE_CHOICES)
    location = models.CharField(max_length=255)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Test(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # User Relation
