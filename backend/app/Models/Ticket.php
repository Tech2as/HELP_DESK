<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ticket extends Model
{

     use HasFactory;
     
      protected $fillable = [
        'titulo',
        'descricao',
        'prioridade',
        'status',
        'user_id',
        'analista_id'
    ];

    /* Relacionamento entre as tabelas */

    // Usuário que abriu o ticket
    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Analista responsável
    public function analista()
    {
        return $this->belongsTo(User::class, 'analista_id');
    }

    // Comentários do ticket
    public function comentarios()
    {
        return $this->hasMany(Comment::class);
    }
}
